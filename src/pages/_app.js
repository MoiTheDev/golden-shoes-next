import "../styles/global.css";
import NavBar from "@/components/nav-bar/nav-bar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
