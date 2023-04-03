import Layout from "@/components/Layout";
import "@/styles/globals.css";
import "react-alice-carousel/lib/alice-carousel.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
