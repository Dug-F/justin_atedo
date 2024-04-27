"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ item }) => {
  const pathName = usePathname();

  return (
    <Link href={item.path} className={`min-w-[100px] p-2 rounded-full text-center pointer  ${pathName === item.path && "bg-secondary-light text-primary-light dark:bg-secondary-dark dark:text-primary-dark"}`}>
      {item.title}
    </Link>
  );
};

export default NavLink;
