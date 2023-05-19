import Image from "next/image";
import Link from "next/link";
import type { PropsWithChildren } from "react";
import { Toaster } from "react-hot-toast";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const SeasonedLogo = () => (
  <Link
    href="/"
    className="btn-ghost btn font-serif text-xl font-light normal-case"
  >
    Seasoned
    <Image
      src="/images/fa-carrot.svg"
      width={28}
      height={28}
      alt="Orange carrot icon"
      className="bounce-once ml-1"
    />
  </Link>
);

const Nav = (props: PropsWithChildren) => {
  const links = [
    { href: "/recipes", label: "Recipes" },
    { href: "/produce", label: "Produce" },
  ];

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* <!-- Navbar --> */}
        <div className="navbar w-full bg-[#BF572B] text-info drop-shadow-md">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn-ghost btn-square btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <SeasonedLogo />
          <div className="hidden flex-none lg:block">
            <ul className="menu menu-horizontal">
              {/* <!-- Navbar menu content here --> */}
              {links.map(({ href, label }, index) => (
                <li key={index}>
                  <Link
                    href={href}
                    className="font-serif hover:cursor-pointer hover:underline"
                  >
                    {label.toUpperCase()}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-none">
            <SignedIn>
              <button className="btn-ghost btn-circle btn">
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
              </button>
            </SignedIn>
            <button className="btn-ghost btn-circle btn">
              <SignedIn>
                <UserButton />
              </SignedIn>
              <SignedOut>
                <SignInButton>
                  <button className="btn-ghost btn-circle btn" title="Sign in">
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
                  </button>
                </SignInButton>
              </SignedOut>
            </button>
          </div>
        </div>
        {/* <!-- Page content here --> */}
        {props.children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu w-80 bg-[#BF572B] p-4 text-info">
          {/* <!-- Sidebar content here --> */}
          <SeasonedLogo />
          {links.map(({ href, label }, index) => (
            <li key={index}>
              <Link
                href={href}
                // className="hover:cursor-pointer hover:underline"
                className="font-serif"
              >
                {label.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      </div>
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
      <Toaster />
      <main className="min-h-screen items-center justify-center bg-info">
        <Nav>{props.children}</Nav>
      </main>
      <Footer />
    </>
  );
};
