"use client";
import React, { useState, useEffect, ChangeEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

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

const FloatingInputPasswordLabel = ({
  type,
  label,
  size,
  name,
  background,
  width,
  setValue,
  field,
}: Props) => {
  const [inputValue, setInputValue] = useState<string>(""); // Track input value
  const [isFocused, setIsFocused] = useState<boolean>(
    false || (field?.value && true)
  ); // Track focus state
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // useEffect(() => {
  //   field?.value && setInputValue(field.value);
  //   // console.log(field)
  // }, [field]);

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

  const inputLabel = `py-1 text-gray-500 ${
    size === "large"
      ? "translate-y-2.5"
      : size === "small"
      ? "translate-y-0.5"
      : "translate-y-1.5"
  }`;

  const inputLabelFocus = `text-blue-500 ${
    size === "large"
      ? "text-sm -translate-y-3.5"
      : size === "small"
      ? "text-xs -translate-y-2"
      : "text-sm -translate-y-2.5"
  }`;

  return (
    <div
      className={`relative ${inputSize} mb-2 ${
        width ? width : "w-[100%]"
      }  mt-2 z-2 border-gray-300  border-2 rounded-lg ${
        isFocused ? " border-blue-500 mt-2" : ""
      }`}
    >
      <div className="flex h-[48px]">
        <input
          id={name}
          type={type}
          value={inputValue || field?.value}
          onChange={handleInputChange}
          onFocus={toggleFocus}
          onBlur={toggleFocus}
          className={`w-full z-2   bg-transparent py-2 px-4 outline-none ${inputText}`}
          // {...field}
        />
        <label
          htmlFor={name}
          className={`px-1 transition-500 cursor-text z-1 text-left ${inputText} ${
            background ? background : "bg-portage-50"
          } absolute left-4 transition-all transform ${
            isFocused || inputValue || field?.value
              ? inputLabelFocus
              : inputLabel
          }`}
        >
          {label}
        </label>
        {type === "date" && !isValidDate(inputValue) && inputValue && (
          <span className="absolute text-red-500 text-xs mt-1">
            Invalid date format (YYYY-MM-DD)
          </span>
        )}
        <div className="flex items-center h-[44px] mx-4">
          {isVisible ? (
            <FontAwesomeIcon
              icon={faEye}
              className="text-[18px] cursor-pointer hover:text-slate-400"
            />
          ) : (
            <FontAwesomeIcon
              icon={faEyeSlash}
              className="text-[18px] cursor-pointer hover:text-slate-400"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default FloatingInputPasswordLabel;
