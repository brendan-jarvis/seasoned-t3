import { type AppType } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import { Bree_Serif, Nobile } from "@next/font/google";

import { api } from "~/utils/api";

import "~/styles/globals.css";

const nobile = Nobile({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
  variable: "--font-nobile",
  display: "swap",
});

const breeSerif = Bree_Serif({
  subsets: ["latin-ext"],
  weight: "400",
  variable: "--font-bree-serif",
  display: "swap",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <main className={`${nobile.variable} ${breeSerif.variable}`}>
        <Component {...pageProps} />
      </main>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
