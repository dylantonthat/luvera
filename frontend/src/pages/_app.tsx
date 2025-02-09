import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Lexend, Libre_Bodoni, Libre_Caslon_Display } from "next/font/google";
import Head from "next/head";

const libreBodoni = Libre_Bodoni({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-libre-bodoni" });
const lexend = Lexend({ subsets: ["latin"], weight: ["300", "400", "500"], variable: "--font-lexend" });
const libreCaslon = Libre_Caslon_Display({ subsets: ["latin"], weight: ["400"], variable: "--font-libre-caslon" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Luvera: Accessible Skincare, One Ingredient at a Time</title>
        <meta name="description" content="Welcome to Luvera." />
      </Head>

      <div className={`${libreCaslon.variable} ${lexend.variable} ${libreBodoni.variable}`}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
