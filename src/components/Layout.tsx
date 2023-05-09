import type { PropsWithChildren } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export const PageLayout = (props: PropsWithChildren) => {
  return (
    <>
      <Nav />
      <div className="flex min-h-screen flex-col items-center justify-center bg-info">
        <div>{props.children}</div>
      </div>
      <Footer />
    </>
  );
};
