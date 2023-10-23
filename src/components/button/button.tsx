import React from "react";

interface Props {
  label: string;
  size?: string;
  styleType?: string;
  disabled?: boolean;
  onClick?: () => void;
  icon?: React.ReactNode;
}

const Button = ({
  label,
  size = "large",
  styleType = "primary",
  disabled = false,
  icon,
  onClick,
}: Props) => {
  const buttonSize = `${
    size === "large"
      ? "px-[30px] py-[15px]"
      : size === "medium"
      ? "px-5 py-2.5"
      : "px-2.5 py-[5px]"
  }`;

  const buttonStyle = `rounded-lg  ${
    styleType === "primary"
      ? "text-lightColor bg-secondary hover:opacity-80 active:from-portage-700 active:via-portage-300 active:to-portage-600"
      : styleType === 'delete' ? "bg-red-500 hover:bg-red-300 text-portage-50" : "text-portage-400 border-2 border-portage-400  hover:bg-portage-200 active:border-portage-500 active:text-portage-500"
  }`;

  return (
    <button
      className={buttonSize + " " + buttonStyle}
      disabled={disabled}
      onClick={onClick}
    >
      {icon && <span>{icon}</span>}
      {label}
    </button>
  );
};

export default Button;
