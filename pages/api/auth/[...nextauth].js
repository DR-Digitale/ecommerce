import jwt from "jsonwebtoken";
import NextAuth from "next-auth";
import CredentialsProviders from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import axios from "axios";

let user = null;

const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProviders({
      name: "Credentials",
      credentials: {
        username: {
          label: "Nom d'utilisateur",
          type: "text",
          placeholder: "jsmith",
        },
        password: { label: "Mot de passe", type: "password" },
      },
      async authorize(credentials) {
        try {
          const { username, password } = credentials;
          const authReq = axios
            .post(
              `${process.env.NEXT_PUBLIC_BASE_URL}wp-json/jwt-auth/v1/token`,
              {
                username: username,
                password: password,
              }
            )
            .then(function (response) {
              return response;
            })
            .catch(function (error) {
              console.error(error);
              return null;
            });
          const user = await authReq;
          if (user.status !== 200) {
            throw new Error("There is an error");
          }
          if (user && user.status === 200 && user.data) {
            return user.data;
          }
          return null;
        } catch (error) {
          console.error(error);
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
  ],
  // session: {
  //   jwt: true,
  //   maxAge: 60 * 60 * 24 * 7, //7 days (same as jwt from wp)
  // },
  secret: process.env.NEXTAUTH_SECRET,
  // jwt: {
  //   secret: process.env.NEXTAUTH_SECRET,
  // },
  callbacks: {
    async jwt({ token, user, account }) {
      if (user) {
        return {
          ...user,
          token: user.token,
        };
      }
      return token;
    },
    async session({ session, token }) {
      session.user = {
        ...token,
        id: parseInt(jwt.decode(token.token).data.user.id),
      };

      return session;
    },
  },
  debug: process.env.NODE_ENV === "development",
  pages: {
    signIn: "/auth/signin",
  },
  cookie: {
    secure: process.env.NODE_ENV && process.env.NODE_ENV === "production",
  },
};

export default NextAuth(authOptions);
