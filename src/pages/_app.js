import "@/assets/css/blur.css";
import "@/assets/css/global.css";
import "@/assets/css/mobileMenu.css";
import "@/assets/css/whatsappWidget.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "@/components/layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
