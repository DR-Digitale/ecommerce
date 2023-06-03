import Image from "next/image";
import React, { useState } from "react";
import { Button } from ".";
import Icon from "./Icon";
import image from "../assets/img/pied-bebe.webp";
import recaptcha from "../assets/icon/Recaptcha.svg";
import { motion } from "framer-motion";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import axios from "axios";

const Login = () => {
  const [action, setAction] = useState("sign-in");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const payload = { email, password };
  const handleSignIn = async (e) => {
    e.preventDefault();
    if (action === "sign-in") {
      signIn("credentials", {
        username: email,
        password: password,
        callbackUrl: "/",
      });
    }
  };
  // const handleRegister = async (e) => {
  //   e.preventDefault();
  //   if (action === "sign-up") {
  //     const register = poster(
  //       "wp-json/wc/v3/customers",
  //       { email, password },
  //       "POST"
  //     );
  //     const user = await register;
  //     console.log(user);

  //     if (user?.status !== 200) {
  //       throw new Error("There is an error");
  //     } else {
  //       signIn("credentials", {
  //         username: email,
  //         password: password,
  //         callbackUrl: "/",
  //       });
  //     }
  //   }
  // };

  return (
    <div className="h-screen flex items-center justify-center bg-black">
      <div className="rounded-[16px] flex items-center w-[80vw] h-[65vh] bg-white">
        <div className="relative w-1/2 h-[65vh]">
          <Image
            className="rounded-l-[16px] !p-[2px]"
            src={image}
            alt=""
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute bottom-12 text-center w-full">
            <Button
              className="py-4 px-8 bg-surface rounded-[64px] text-white border border-grey-darkest"
              ariaLabel="connexion-invité"
            >
              Continuer en tant qu&apos;invité
            </Button>
          </div>
        </div>
        <div className="p-12 w-1/2">
          <div className="flex items-center justify-between pb-10">
            <h5>Accéder à votre espace personnel</h5>
            <Button>
              <Icon icon="cancel" size={24} />
            </Button>
          </div>
          <div className="flex items-center gap-8 border-b border-grey-lighter">
            <Button
              className={`relative pb-2 ${
                action === "sign-in" ? "text-peps-major" : ""
              }`}
              onClickFunction={() => setAction("sign-in")}
            >
              Se connecter
              {action === "sign-in" ? (
                <motion.div
                  transition={{ type: "spring", duration:0.35  }}
                  className="absolute -bottom-px left-0 right-0 h-[2px] bg-peps-major"
                  layoutId="underline"
                />
              ) : null}
            </Button>
            <Button
              className={`relative pb-2 ${
                action === "sign-up" ? "text-peps-major" : ""
              }`}
              onClickFunction={() => setAction("sign-up")}
            >
              Créer un compte
              {action === "sign-up" ? (
                <motion.div
                  transition={{ type: "spring", duration:0.35 }}
                  className="absolute -bottom-px left-0 right-0 h-[2px] bg-peps-major"
                  layoutId="underline"
                />
              ) : null}
            </Button>
          </div>
          <div className="flex items-center gap-4 text-grey-darker py-8">
            Avec
            <Button
              className="button-outline"
              onClickFunction={() => signIn("google")}
            >
              <Icon icon="google" size={24} /> Google
            </Button>
            <Button
              className="button-outline"
              onClickFunction={() => signIn("facebook")}
            >
              <Icon icon="facebook" size={24} /> Facebook
            </Button>
          </div>
          <hr className="overflow-visible border-grey-lighter text-center h-[5px] after:bg-white after:content-['OU'] after:px-4 after:relative after:top-[-13px] after:text-grey-medium pb-10" />
          <form onSubmit={handleSignIn}>
            <input
              className="input-style mb-10 pl-0"
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="input-style mb-7 pl-0"
              type="password"
              name="password"
              id="password"
              placeholder="Mot de passe"
              onChange={(e) => setPassword(e.target.value)}
            />
            {action === "sign-in" && (
              <Button className="mb-6">Mot de passe oublié ?</Button>
            )}
            <div className="flex justify-between items-center">
              <label className="flex items-center gap-2" htmlFor="memory">
                <input type="checkbox" name="memory" id="memory" />
                Se souvenir de moi
              </label>
              {action === "sign-in" && (
                <Button type="submit" className="button-accent">
                  Se connecter
                </Button>
              )}
            </div>
            {action === "sign-up" && (
              <div className="flex items-center justify-between pt-6">
                <div className="relative w-[52px] h-[52px]">
                  <Image src={recaptcha} alt="" layout="fill" />
                </div>
                <Button className="button-accent">Créer un compte</Button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
