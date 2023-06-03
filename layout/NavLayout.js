import Head from "next/head";
import { useRouter } from "next/router";
import { Header } from "../features";

const NavLayout = ({...props}) => {
  const { asPath } = useRouter();
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {props.children}
      </main>
    </div>
  );
};

export default NavLayout;
