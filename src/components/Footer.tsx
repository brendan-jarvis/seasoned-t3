import Image from "next/image";

export const Footer = () => {
  const founders = [
    { href: "https://github.com/pei-yeshuang-zhang", label: "Pei Zhang" },
    { href: "https://github.com/ZinHoang", label: "Zin Hoang" },
    { href: "https://github.com/MrAshRockett", label: "Ash Rockett" },
    { href: "https://github.com/brendan-jarvis", label: "Brendan Jarvis" },
    { href: "https://github.com/tomas-alves08", label: "Tomas Alves de Souza" },
  ];

  return (
    <footer className="h-48 w-full bg-secondary text-info">
      <div className="flex flex-wrap items-center justify-center p-4 text-base md:ml-auto">
        {founders.map(({ href, label }, index) => (
          <a
            key={index}
            href={href}
            className="mr-5 hover:cursor-pointer hover:underline"
          >
            {label}
            <Image
              width={16}
              height={16}
              src="/images/github-mark-white.png"
              alt="Github Invertocat Logo"
            />
          </a>
        ))}
      </div>
    </footer>
  );
};
