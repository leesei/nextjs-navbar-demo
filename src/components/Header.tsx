import Link from "next/link";
import { useState } from "react";
import { RiUser3Fill } from "react-icons/ri";

import { NavLink } from "@/components/NavLink";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { useAuth } from "@/hooks/AuthService";
import { cn } from "@/lib/utils";

const nav_links = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "News", path: "/news" },
  { label: "Links", path: "/links" },
  { label: "Contact", path: "/contact" },
];

export function Navbar1({ isToggleOpen }: { isToggleOpen: boolean }) {
  return (
    <header className="g:after:invisible relative z-20 w-full after:z-10 after:block after:h-px after:w-full lg:after:h-[4rem]">
      <NavigationMenu
        className={cn(
          "absolute right-0 top-0",
          "w-full transition-[opacity,visibility] duration-300",
          "lg:visible lg:opacity-100",
          {
            "visible opacity-100": isToggleOpen,
            "invisible opacity-0": !isToggleOpen,
          }
        )}
      >
        <NavigationMenuList className="px-8 py-1">
          {nav_links.map((link) => (
            <NavigationMenuItem key={link.path}>
              <NavLink href={link.path} legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-sm bg-nav px-4 py-2 text-lg font-bold text-nav-foreground",
                    "actve:bg-nav hover:bg-nav-accent hover:text-nav-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                    "data-[active]:underline data-[active]:decoration-4 data-[active]:underline-offset-4",
                    "transition duration-500 hover:-translate-y-1"
                  )}
                >
                  {link.label}
                </NavigationMenuLink>
              </NavLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}

export function Navbar({ isToggleOpen }: { isToggleOpen: boolean }) {
  return (
    <header className="relative z-20 w-full after:z-10 after:block after:h-px after:w-full lg:after:invisible ">
      <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
        <nav
          aria-label="main navigation"
          className="flex h-[5.5rem] items-stretch justify-center font-medium text-slate-700"
          role="navigation"
        >
          {/*      <!-- Navigation links --> */}
          <ul
            role="menubar"
            aria-label="select page"
            className={`absolute left-0 top-0 z-[-1] w-full
                justify-center overflow-hidden overflow-y-auto overscroll-contain
                bg-white/90 px-8 font-medium
                transition-[opacity,visibility] duration-300
                lg:visible lg:relative lg:top-0 lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:opacity-100 ${
                  isToggleOpen
                    ? "visible opacity-100 backdrop-blur-sm"
                    : "invisible opacity-0"
                }`}
          >
            {nav_links.map((link) => (
              <li key={link.path} role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  tabIndex={0}
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:bg-emerald-50 focus:outline-none focus-visible:outline-none lg:px-8"
                  href={link.path}
                >
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default function Header() {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const { auth } = useAuth();
  return (
    <>
      <header
        className={cn("mb-2 w-full bg-cover bg-bottom bg-no-repeat px-3 py-3")}
      >
        <div className="flex flex-row align-middle">
          <Link
            href="/"
            className="inline-flex flex-row flex-shrink-0 gap-1 items-center whitespace-nowrap text-lg focus:outline-none"
          >
            <img
              src="https://placehold.co/300x100/"
              className="h-[4rem] max-w-screen-1/10 object-contain"
              alt="示例公司"
              title="示例公司"
            />
            <span className="text-3xl md:text-4xl lg:text-5xl">
              Navbar demo
            </span>
          </Link>

          <div className="spacer flex-grow"></div>

          <div className="inline-flex flex-col items-center justify-center ">
            {auth ? (
              <Link
                href="/me"
                className="rounded-sm bg-nav px-3 py-2 text-nav-foreground lg:text-lg"
              >
                <RiUser3Fill />
              </Link>
            ) : (
              <Link
                href="/login"
                className="rounded-sm bg-nav px-3 py-2 text-nav-foreground lg:text-lg"
              >
                Login
              </Link>
            )}
          </div>

          {/*  <!-- Mobile trigger --> */}
          {/*  <!-- TODO: Replace with drawer --> */}
          <button
            className={`relative h-10 w-10 self-center lg:hidden
                  ${
                    isToggleOpen
                      ? "block [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0 "
                      : ""
                  }
                `}
            onClick={() => setIsToggleOpen(!isToggleOpen)}
            aria-expanded={isToggleOpen}
            aria-label="Toggle navigation"
          >
            <div className="absolute left-1/2 top-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
              <span
                aria-hidden="true"
                className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
              ></span>
              <span
                aria-hidden="true"
                className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
              ></span>
              <span
                aria-hidden="true"
                className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
              ></span>
            </div>
          </button>
        </div>
      </header>
      <Navbar1 isToggleOpen={isToggleOpen} />
    </>
  );
}
