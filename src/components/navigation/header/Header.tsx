import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import Notification from "@/components/notification/Notification";
import UserMenu from "@/components/user/UserMenu";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center h-[72px] w-full border-b-2 px-6">
      <div>
        <Breadcrumb icon={true} />
      </div>
      <div className="flex gap-2">
        <Notification />
        <UserMenu />
      </div>
    </div>
  );
};

export default Header;
