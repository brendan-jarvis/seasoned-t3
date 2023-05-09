import Link from "next/link";

export const Nav = () => {
  const links = [
    { href: "/", label: "Home" },
    { href: "/recipes", label: "Recipes" },
    { href: "/produce", label: "Produce" },
  ];

  return (
    <header className="w-full bg-[#BF572B] font-semibold text-info shadow-stone-950 drop-shadow-lg">
      <div className="container mx-auto flex flex-col flex-wrap items-center p-4 md:flex-row">
        <a className="title-font mb-4 flex items-center font-medium text-info md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="h-10 w-10 rounded-full p-2 text-info"
            viewBox="0 0 24 24"
          >
            <path
              d="M3 12h18M3 6h18M3 18h18"
              stroke="#EFF6EE"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
          <span className="ml-3 text-xl">Seasoned</span>
        </a>
        <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
          {links.map(({ href, label }, index) => (
            <Link
              key={index}
              href={href}
              className="mr-5 hover:cursor-pointer hover:underline"
            >
              {label}
            </Link>
          ))}
        </nav>
        <button className="mt-4 inline-flex items-center rounded bg-[#BF572B] px-3 py-1 text-base hover:bg-primary md:mt-0">
          Button
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="ml-1 h-4 w-4"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};
