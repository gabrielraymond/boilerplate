'use client'
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import NotificationItem from "./NotificationItem";

const Notification = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState<boolean>(false);

  const togglePopover = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <div
        className="w-[52px] h-[52px] flex items-center justify-center bg-sweden-700 rounded-xl"
        onClick={() => togglePopover()}
      >
        <FontAwesomeIcon icon={faBell} className="text-sweden-900" />
      </div>
      {isPopoverOpen && (
        <div className="origin-bottom-left absolute right-0 mt-2 w-96 px-6 py-4 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-20">
          <h1 className="text-2xl">Notification</h1>
          <div>
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
          </div>
        </div>
      )}
    </div>
  );
};

export default Notification;
