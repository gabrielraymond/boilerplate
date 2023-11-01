import React from "react";

const Container = ({ children }: any) => {
  return <div className="p-5 min-h-[calc(100vh-144px)]">{children}</div>;
};

export default Container;
