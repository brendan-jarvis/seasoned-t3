import Image from "next/image";
import type { PropsWithChildren } from "react";
import { Nav } from "./Nav";
import { Toaster } from "react-hot-toast";

export const Footer = () => {
  const founders = [
    { href: "https://github.com/pei-yeshuang-zhang", label: "Pei Zhang" },
    { href: "https://github.com/ZinHoang", label: "Zin Hoang" },
    { href: "https://github.com/MrAshRockett", label: "Ash Rockett" },
    { href: "https://github.com/brendan-jarvis", label: "Brendan Jarvis" },
    { href: "https://github.com/tomas-alves08", label: "Tomas Alves de Souza" },
  ];

  return (
    <footer className="flex w-full items-center justify-center bg-secondary p-8 text-info">
      <div className="flex flex-col flex-wrap p-4 text-base sm:flex-row">
        {founders.map(({ href, label }, index) => (
          <a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="mr-5 p-2 hover:cursor-pointer hover:underline"
          >
            <div className="flex items-center gap-1">
              {label}
              <Image
                width={16}
                height={16}
                src="/images/github-mark-white.png"
                alt="Github Invertocat Logo"
              />
            </div>
          </a>
        ))}
      </div>
    </footer>
  );
};

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
