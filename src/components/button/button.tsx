import React from "react";

interface Props {
  style: "primary" | "outlined" | "secondary";
  size: "large" | "regular" | "small";
  state: "regular" | "hover" | "active" | "disabled";
  label: string;
  onClick?: () => void;
}

const Button = ({ style, size, state, label, onClick }: Props) => {
  const getButtonClasses = () => {
    const commonClasses = "rounded-lg transition-all ease-in duration-150";
    const sizeClasses = {
      large: "text-lg px-[30px] py-[15px]",
      regular: "text-base px-5 py-2.5",
      small: "text-sm px-2.5 py-[5px]",
    };
    const styleClasses = {
      primary: "bg-sweden-100 text-sweden-500 hover:opacity-80 active:bg-sweden-400 ",
      outlined: "border border-sweden-100 hover:opacity-80 active:bg-blue-400 text-sweden-100",
      secondary:
        "bg-sweden-300 text-sweden-800 hover:opacity-80 active:bg-gray-200",
    };
    const stateClasses = {
      regular: "",
      hover: "hover:scale-105 hover:shadow-md",
      active: "active:scale-95 active:shadow-sm",
      disabled: "opacity-50 cursor-not-allowed",
    };

    const sizeClass = sizeClasses[size] || sizeClasses.regular;
    const styleClass = styleClasses[style] || styleClasses.primary;
    const stateClass = stateClasses[state] || stateClasses.regular;

    return `${commonClasses} ${sizeClass} ${styleClass} ${stateClass}`;
  };

  return (
    <button
      className={getButtonClasses()}
      disabled={state === "disabled"}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
