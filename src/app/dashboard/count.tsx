"use client";
import { useNonApiStore } from "@/store/nonApi";
import React from "react";

const Counter = () => {
  const nonApiData = useNonApiStore((state) => state.nonApiData);
  const setNonApiData = useNonApiStore((state) => state.setNonApiData);
  return (
    <div>
      <button className="py-1 px-4 bg-blue-400 rounded" onClick={() => setNonApiData(nonApiData - 1)}>-</button>
      <span className="mx-3">{nonApiData}</span>
      <button className="py-1 px-4 bg-red-400 rounded" onClick={() => setNonApiData(nonApiData + 1)}>+</button>
    </div>
  );
};

export default Counter;
