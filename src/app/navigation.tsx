"use client";
import Header from "@/components/navigation/header/Header";
import Navbar from "@/components/navigation/navbar/Navbar";
import { CheckIsPrivateRoute } from "@/utils/route";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Navigation = ({isPrivate}:any) => {
  const [isDashboard, setIsDashboard] = useState<boolean>(isPrivate);
  const pathname = usePathname();
  useEffect(() => {
    if (CheckIsPrivateRoute(pathname)) {
      setIsDashboard(true);
    } else {
      setIsDashboard(false);
    }
  }, [pathname]);
  return <div>{isDashboard ? <Header /> : <Navbar />}</div>;
};

export default Navigation;
