'use client'
import {
  faAngleDown,
  faGear,
  faLock,
  faRightFromBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const UserMenu = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const togglePopover = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };
  return (
    <div className="relative inline-block text-left">
      <div
        className="w-[220px] h-[52px] flex justify-between items-center bg-sweden-700 rounded-xl py-1 px-2"
        onClick={() => togglePopover()}
      >
        <div className="flex gap-2">
          <div className="w-[40px] h-[40px] bg-sweden-600 rounded-xl flex items-center justify-center">
            <FontAwesomeIcon icon={faUser} className="text-sweden-900" />
          </div>
          <div className="h-[40px]">
            <h1 className="text-sm font-semibold m-0">Gabriel Raymond</h1>
            <p className="text-xs font-reguler">Owner</p>
          </div>
        </div>
        <div className="px-2">
          <FontAwesomeIcon
            icon={faAngleDown}
            className="text-sweden-800 text-xl"
          />
        </div>
      </div>
      {isPopoverOpen && (
        <div className="origin-bottom-left absolute right-0 mt-2 w-[220px] p-4 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-20">
          <div className="flex items-center gap-4  py-1 px-2 rounded-md hover:bg-sweden-600 cursor-pointer">
            <FontAwesomeIcon icon={faUser} className="text-sweden-900" />
            <h2>Profil</h2>
          </div>
          <div className="flex items-center gap-4 py-1 px-2 rounded-md hover:bg-sweden-600 cursor-pointer">
            <FontAwesomeIcon icon={faGear} className="text-sweden-900" />
            <h2>Account Setting</h2>
          </div>
          <div className="flex items-center gap-4 py-1 px-2 rounded-md hover:bg-sweden-600 cursor-pointer">
            <FontAwesomeIcon icon={faLock} className="text-sweden-900" />
            <h2>Security</h2>
          </div>
          <div className="flex items-center gap-4 py-1 px-2 rounded-md hover:bg-sweden-600 cursor-pointer">
            <FontAwesomeIcon
              icon={faRightFromBracket}
              className="text-sweden-900"
            />
            <h2>Log Out</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
