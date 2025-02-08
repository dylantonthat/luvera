import "@/styles/globals.css";
import { Libre_Bodoni, Lexend, Libre_Caslon_Display } from "next/font/google";

const libreBodoni = Libre_Bodoni({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-libre-bodoni" });
const lexend = Lexend({ subsets: ["latin"], weight: ["300", "400", "500"], variable: "--font-lexend" });
const libreCaslon = Libre_Caslon_Display({ subsets: ["latin"], weight: ["400"], variable: "--font-libre-caslon" });

export default function App({ Component, pageProps }: any) {
  return (
    <div className={`${libreCaslon.variable} ${lexend.variable} ${libreBodoni.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}
