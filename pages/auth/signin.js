import React from "react";
import { useSession } from "next-auth/react";
import Login from "../../components/Login";
import { useRouter } from "next/router";

const SignIn = () => {
  const session = useSession();
  const router = useRouter();
  return (
    <>
      {session.status === "authenticated" ? (
        router.push("/espace-personnel")
      ) : (
        <Login />
      )}
    </>
  );
};

export default SignIn;
