import Counter from "@/components/counter";
import React from "react";

const LandingPage = () => {
  return (
    <div className="flex justify-center align-center bg-blue-500">
      <div className="p-4">
        <h1>This is page for Landing Page</h1>
        <Counter />
      </div>
    </div>
  );
};

export default LandingPage;
