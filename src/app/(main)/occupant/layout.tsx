import React from "react";
import Hello from "./page";
import Navbar from "@/components/navigation/navbar/Navbar";

const LayoutHello = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
        <Navbar />
      <div >{children}</div>
    </div>
  );
};

export default LayoutHello;
