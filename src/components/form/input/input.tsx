"use client";
import React, { useState, useEffect, ChangeEvent } from "react";

interface Props {
  type: string;
  placeholder?: string;
  field?: any;
  label?: string;
  name: string;
  size: "large" | "reguler" | "small";
  background?: string;
  width?: string;
  setValue?: any;
}

const Input = ({
  type,
  label,
  size,
  name,
  background,
  width,
  setValue,
  field,
  placeholder
}: Props) => {
  const [inputValue, setInputValue] = useState<string>(""); // Track input value
  const [isFocused, setIsFocused] = useState<boolean>(
    false || (field?.value && true)
  ); // Track focus state

  // Handle input change
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setInputValue(e.target.value);
      setValue(name, e.target.value);
    } else {
      setInputValue("");
      setValue(name, "");
    }
  };

  // Toggle focus state
  const toggleFocus = () => {
    setIsFocused(!isFocused);
  };

  const isValidDate = (dateString: string) => {
    const regEx = /^\d{4}-\d{2}-\d{2}$/;
    return regEx.test(dateString);
  };

  const inputSize = `${
    size === "large" ? "h-[60px]" : size === "small" ? "h-[36px]" : "h-[48px]"
  }`;

  const inputText = `${
    size === "large" ? "text-xl" : size === "small" ? "text-sm" : "text-base"
  }`;


  return (
    <div
      className={`relative ${inputSize} mb-2 ${
        width ? width : "w-[100%]"
      }  mt-2 z-2   border-2 rounded-lg ${
        isFocused ? " border-blue-500 mt-2" : "border-gray-300"
      }`}
    >
      <input
        id={name}
        type={type}
        value={inputValue || field?.value}
        onChange={handleInputChange}
        onFocus={toggleFocus}
        onBlur={toggleFocus}
        className={`w-full z-2 h-full bg-transparent py-2 px-4 outline-none ${inputText}`}
        placeholder={placeholder}
        // {...field}
      />
    </div>
  );
};

export default Input;
