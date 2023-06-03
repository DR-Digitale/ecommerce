import NavBar from "../components/NavBar";
import "../styles/globals.css";
import Provider from "../utils/useProvider";
import Footer from "../containers/Footer";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
        <SessionProvider session={session}>
            <Provider>
                <NavBar />
                <Component {...pageProps} />
                <Footer />
            </Provider>
        </SessionProvider>
    </>
  );
}
export default MyApp;
