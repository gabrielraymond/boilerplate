import Header from "@/components/navigation/header/Header";
import Sidebar from "@/components/navigation/sidebar/Sidebar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full min-h-screen">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;
