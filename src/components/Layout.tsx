import Image from "next/image";
import Link from "next/link";
import type { PropsWithChildren } from "react";
import { Button } from "./ui/button";
import { Toaster } from "react-hot-toast";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const Nav = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "dark") {
      return <Sun color="white" onClick={() => setTheme("light")} />;
    }

    return <Moon color="white" onClick={() => setTheme("dark")} />;
  };

  const links = [
    { href: "/recipes", label: "Recipes" },
    { href: "/produce", label: "Produce" },
  ];

  return (
    <div className="hidden flex-row justify-center bg-[#BF572B] py-8 text-center font-serif font-extrabold drop-shadow-lg lg:flex">
      <Link
        href="/"
        className="font-serif hover:cursor-pointer hover:underline"
      >
        <Button variant="ghost" className="font-serif text-lg font-medium">
          Seasoned
          <Image
            src="/images/fa-carrot.svg"
            width={28}
            height={28}
            alt="Orange carrot icon"
            className="bounce-once ml-1"
          />
        </Button>
      </Link>
      {links.map(({ href, label }, index) => (
        <Button key={index} variant="ghost">
          <Link
            href={href}
            className="font-serif hover:cursor-pointer hover:underline"
          >
            {label.toUpperCase()}
          </Link>
        </Button>
      ))}
      <SignedIn>
        <Button variant="ghost">
          <div className="indicator">
            <Link href="/favourites">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                />
              </svg>
            </Link>
          </div>
        </Button>
      </SignedIn>
      <Button variant="ghost">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton>
            <Button variant="ghost" title="Sign in">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 7 9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5-5-5zm9 12h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-8v2h8v14z"
                  />
                </svg>
              </div>
            </Button>
          </SignInButton>
        </SignedOut>
      </Button>
      <Button
        variant="ghost"
        title={`Set theme to ${theme === "dark" ? "light" : "dark"} mode.`}
      >
        {toggleTheme()}
      </Button>
    </div>
  );
};

const Footer = () => {
  const founders = [
    { href: "https://github.com/pei-yeshuang-zhang", label: "Pei Zhang" },
    { href: "https://github.com/ZinHoang", label: "Zin Hoang" },
    { href: "https://github.com/MrAshRockett", label: "Ash Rockett" },
    { href: "https://github.com/brendan-jarvis", label: "Brendan Jarvis" },
    { href: "https://github.com/tomas-alves08", label: "Tomas Alves de Souza" },
  ];

  return (
    <footer className="text-info flex w-full items-center justify-center bg-lime-800 p-8">
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
      <Toaster />
      <Nav />
      <main className="bg-info min-h-screen items-center justify-center">
        {props.children}
      </main>
      <Footer />
    </>
  );
};
