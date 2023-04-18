import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "@/components/Navbar";
import { MDBContainer } from "mdb-react-ui-kit";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Navbar />
      <MDBContainer>
        <Component {...pageProps} />
      </MDBContainer>
      <Footer />
    </div>
  );
}
