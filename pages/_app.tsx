import "@mantine/core/styles.css";
import "../styles/globals.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import theme from "@theme";
import { FavoritesProvider } from "@/context";
import { Raleway } from "next/font/google";
import Layout from "./layout";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme}>
      <FavoritesProvider>
        <Head>
          <title>Fravega Tech Challenge | Sebastian Antagli</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
          />
          <meta charSet="utf-8" />
          <link rel="shortcut icon" href="/favicon.svg" />
        </Head>
        <main className={raleway.className}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </main>
      </FavoritesProvider>
    </MantineProvider>
  );
}
