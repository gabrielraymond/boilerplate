import {
  faEye,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface Props {
  type: "view" | "edit" | "delete";
  onClick?: () => void;
}

const ActionButton = ({ onClick, type }: Props) => {
  return (
    <button
      className="px-2 py-1 bg-sweden-500 rounded-lg border-[1px] border-sweden-50 leading-none"
      onClick={onClick}
    >
      <FontAwesomeIcon
        icon={type === "view" ? faEye : type === "edit" ? faPenToSquare : faTrash}
        className="text-[15px] text-sweden-50 "
      />
    </button>
  );
};

export default ActionButton;
