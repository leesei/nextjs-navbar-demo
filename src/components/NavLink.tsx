import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import React from "react";

export function NavLink({
  href,
  exact = true,
  children,
  ...props
}: {
  href: string;
  exact?: boolean;
  children: React.ReactElement;
  className?: string;
} & LinkProps) {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  // console.log(`href[${href}] isActive[${isActive}]`);
  return (
    <Link href={href} {...props}>
      {React.cloneElement(children, isActive ? { "data-active": "" } : {})}
    </Link>
  );
}
