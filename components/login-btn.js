import { useSession, signIn, signOut } from "next-auth/react";
import Icon from "./Icon";
import Link from "next/link";

export default function ButtonLogin() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        {/* Signed in as {session?.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button> */}
        <Link href="/espace-personnel">
          <a className="w-10 h-10 flex items-center justify-center">
            <Icon icon="account" className="button-hover" size={24} />
          </a>
        </Link>
      </>
    );
  }
  return (
    <>
      <button
        className="w-10 h-10 flex items-center justify-center"
        onClick={() => signIn()}
      >
        <Icon icon="account" className="button-hover" size={24} />
      </button>
    </>
  );
}
