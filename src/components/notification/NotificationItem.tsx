import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

const NotificationItem = () => {
  return (
    <div className="flex gap-2 py-2">
      <div>
        <div className="w-[40px] h-[40px] bg-sweden-600 flex items-center justify-center rounded-md">
          <FontAwesomeIcon icon={faUser} className="text-[20px]" />
          {/* <Image
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={100}
            height={100}
            alt="user"
          /> */}
        </div>
      </div>
      <div className="text-sm text-sweden-900">
        <p className="">
          <span className="font-semibold text-sweden-800">
            Pengajuan Penyewaan{" "}
          </span>
          {`Gabriel mengajukan
          penyewaan`.substring(0, 15)}
          ...
        </p>
        <p>a day ago</p>
      </div>
    </div>
  );
};

export default NotificationItem;
