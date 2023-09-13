"use client";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { X, Menu } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerBackground, setHeaderBackground] = useState("bg-transparent");
  const [textColor, setTextColor] = useState("text-white");
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") {
        setTextColor("text-white");
        setHeaderBackground("bg-transparent");
    } else {
        setTextColor("text-black");
        setHeaderBackground("bg-blue-50");
    }
    if (pathname === "/" && typeof window !== "undefined") {
      const handleScroll = () => {
        const position = window.scrollY;
        if (position < 100) {
          setHeaderBackground("bg-transparent");
          setTextColor("text-white");
        } else {
          setHeaderBackground("bg-blue-50");
          setTextColor("text-black");
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed w-full h-20 flex flex-row justify-between md:justify-start z-40 px-4 top-0",
        headerBackground,
        textColor
      )}
    >
      <div className="flex flex-col justify-center flex-nowrap font-bold text-3xl">
        <Link className="flex flex-row justify-center w-32" href="/">
          R-Think
        </Link>
      </div>
      <nav className="hidden md:flex flex-col justify-center text-lg ml-20">
        <ul className="md:flex md:flex-row justify-center">
          <li className="px-4 hover:underline">
            <Link href="/">About</Link>
          </li>
          <li className="px-4 hover:underline">
            <Link href="/blog">Blog</Link>
          </li>
{/*           <li className="px-4 hover:underline">
            <Link href="/">Careers</Link>
          </li> */}
          <li className="px-4 hover:underline">
          <Link href="/principles">Our Principles</Link>
          </li>
          <li className="px-4 hover:underline">
            <a href="mailto:info@rthink.ai">Contact us</a>
          </li>
        </ul>
      </nav>
      <div className="flex flex-col justify-center flex-nowrap text-lg">
        <button
          className="md:hidden flex flex-row justify-center w-28 font-bold hover:cursor-pointer"
          onClick={() => {
            setMenuOpen((x) => !x);
          }}
        >
          <Menu size={36} />
        </button>
      </div>
      {menuOpen ? (
        <div className="absolute left-0 w-screen text-white">
          <div className="flex flex-col justify-center items-center pt-6 md:hidden bg-blue-50">
            <div className="pl-4 flex flex-col self-start flex-nowrap font-bold text-3xl">
              <Link className="flex flex-row w-32" href="/">
                R-Think
              </Link>
            </div>
            <ul className="w-full flex flex-col justify-center text-base">
              <li className="h-10 flex items-center justify-center hover:bg-sky-300">
                <Link href="/">About</Link>
              </li>
              <li className="h-10 flex items-center justify-center hover:bg-sky-300">
                <Link href="/blog">Blog</Link>
              </li>
              {/* <li className="h-10 flex items-center justify-center hover:bg-sky-300">
                <Link href="/">Careers</Link>
              </li> */}
              <li className="h-10 flex items-center justify-center hover:bg-sky-300">
                <Link href="/principles">Our Principles</Link>
              </li>
              <li className="h-10 flex items-center justify-center hover:bg-sky-300">
                <Link href="/">Contact us</Link>
              </li>
            </ul>
          </div>
          <div
            className="absolute hover:underline hover:cursor-pointer top-[30px] right-4"
            onClick={() => {
              setMenuOpen((x) => !x);
            }}
          >
            <X size={36} />
          </div>
          <Separator></Separator>
        </div>
      ) : null}
    </header>
  );
}
