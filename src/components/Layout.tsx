import type { PropsWithChildren } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { Toaster } from "react-hot-toast";

export const PageLayout = (props: PropsWithChildren) => {
  return (
    <>
      <Nav />
      <Toaster />
      <main className="min-h-screen items-center justify-center bg-info">
        {props.children}
      </main>
      <Footer />
    </>
  );
};
