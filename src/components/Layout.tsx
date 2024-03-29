import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { PropsWithChildren } from "react";
import { Button } from "./ui/button";
import { Toaster } from "react-hot-toast";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { useTheme } from "next-themes";
import { Moon, Sun, Heart, Menu, X } from "lucide-react";

const Nav = (props: PropsWithChildren) => {
  const { theme, setTheme } = useTheme();
  const [sidebarVisibility, setsidebarVisibility] = useState(false);

  const links = [
    { href: "/recipes", label: "Recipes" },
    { href: "/produce", label: "Produce" },
  ];

  return (
    <div>
      <div className="flex flex-row justify-center bg-[#BF572B] py-8 text-center font-serif font-extrabold drop-shadow-lg">
        <div className="lg:hidden">
          <Button variant="ghost">
            <Menu onClick={() => setsidebarVisibility(!sidebarVisibility)} />
          </Button>
        </div>
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
              priority={true}
              className="bounce-once ml-1"
            />
          </Button>
        </Link>
        <div className="hidden lg:block">
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
        </div>
        <SignedIn>
          <Button variant="ghost">
            <div className="indicator">
              <Link href="/favourites">
                <Heart />
              </Link>
            </div>
          </Button>
        </SignedIn>
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
        {theme === "dark" ? (
          <Button
            variant="ghost"
            title="Light mode"
            onClick={() => setTheme("light")}
          >
            <Sun />
          </Button>
        ) : (
          <Button
            variant="ghost"
            title="Dark mode"
            onClick={() => setTheme("dark")}
          >
            <Moon />
          </Button>
        )}
      </div>
      {props.children}

      {sidebarVisibility && (
        <div
          className="fixed left-0 top-0 z-10 h-full w-full bg-black bg-opacity-50"
          onClick={() => setsidebarVisibility(false)}
        >
          <div
            className={`fixed left-0 top-0 z-20 h-full w-4/5 bg-background p-4 transition-transform duration-300 dark:bg-slate-900 ${
              sidebarVisibility ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="mr-2 flex justify-end">
              <X onClick={() => setsidebarVisibility(false)} />
            </div>
            {links.map(({ href, label }, index) => (
              <Button
                key={index}
                variant="ghost"
                className="mb-2 block w-full text-left"
              >
                <Link
                  href={href}
                  className="font-serif hover:cursor-pointer hover:underline"
                >
                  {label.toUpperCase()}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      )}
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
              <p className="text-slate-100">{label}</p>
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
      <main className="min-h-screen items-center justify-center bg-background text-foreground dark:bg-slate-900 dark:text-foreground">
        <Nav>{props.children}</Nav>
      </main>
      <Footer />
    </>
  );
};
