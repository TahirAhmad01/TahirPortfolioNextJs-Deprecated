import '@/assets/css/global.css';
import Layout from '@/components/layout';
import { ThemeProvider } from 'next-themes';

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider
        attribute="class"
        // forcedTheme={'dark'}
        enableColorScheme
        defaultTheme="dark"
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
