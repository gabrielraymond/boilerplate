import Link from "next/link";
import React from "react";

interface Props {
  href: string;
  children: React.ReactNode;
}

const NavItem = ({ href, children }: Props) => {
  return (
    <li >
      <Link href={href} className="h-full flex items-center px-5 hover:text-blue-500 cursor-pointer">{children}</Link>
    </li>
  );
};

export default NavItem;
