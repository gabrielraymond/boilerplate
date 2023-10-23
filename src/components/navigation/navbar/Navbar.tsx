"use client";
import React from "react";
import Button from "../../button/button";
import { useRouter } from "next/navigation";
import NavItem from "./NavItem";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="w-full h-[72px] flex items-center justify-between px-72">
      <div className="icon cursor-pointer" onClick={() => router.push("/")}>
        <h1 className="font-bold text-2xl">Geshuku</h1>
      </div>
      <div className="h-full">
        <ul className="flex h-full">
          <NavItem href="/">Sewa</NavItem>
          <NavItem href="/partners">Pemilik Properti</NavItem>
        </ul>
      </div>
      <div>
        <Button
          styleType="primary"
          size="medium"
          onClick={() => {
            router.push("/login");
          }}
          label="Login"
        />
      </div>
    </div>
  );
};

export default Navbar;
