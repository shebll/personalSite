"use client";
import Link from "next/link";
import Image from "next/image";
import DropDown from "./dropDown";
import { LazyMotion, domAnimation, m } from "framer-motion";
import Search from "./Search";
function Header() {
  return (
    <LazyMotion features={domAnimation}>
      <m.header
        initial={{ y: -150 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 50 }}
        className="container flex justify-between items-center mx-auto gap-4"
      >
        <Link href="/">
          <Image
            src="/wady_logo.jpeg"
            alt="logo image"
            loading="lazy"
            width={300}
            height={60}
            className="object-contain "
          ></Image>
        </Link>
        <Search />
        <nav className="hidden md:inline-flex">
          <ul className="flex gap-6 items-center">
            <li className="font-semibold text-2xl hover:text-black text-gray-700 ">
              <Link href="/#allProduct">Products & Machines </Link>
            </li>
            <li className="font-semibold text-2xl hover:text-black text-gray-700">
              <Link href="/#services">Services</Link>
            </li>
            <li className="font-semibold text-2xl hover:text-black text-gray-700">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <DropDown></DropDown>
      </m.header>
    </LazyMotion>
  );
}

export default Header;