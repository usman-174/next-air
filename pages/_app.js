import Navbar from "../components/Navbar";
import Context from "../Global/Context";
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {


  return (
    <Context>
    <Navbar/>
      <Component {...pageProps} />
    </Context>
  );
}

export default MyApp;
