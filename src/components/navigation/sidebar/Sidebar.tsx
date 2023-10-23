"use client";

import { LOGIN } from "@/constants/path";
import { CheckIsPrivateRoute } from "@/utils/route";
import {
  faHouse,
  faUser,
  faBed,
  faCreditCard,
  faRightFromBracket,
  faCaretDown,
  faCircle,
  faMeteor,
  faCalendarPlus,
  faChartBar,
  faThLarge,
  faScrewdriver,
  faHandHoldingUsd,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookies from "js-cookie";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

const Sidebar = ({ minified, setMinified }: any) => {
  // const [minified, setMinified] = useState<boolean>(false);
  const [currentRoute, setCurrentRoute] = useState("/");
  const pathname = usePathname();
  const [isShow, setIsShow] = useState<boolean>(false);

  useEffect(() => {
    if (CheckIsPrivateRoute(pathname)) {
      setIsShow(true);
    } else {
      setIsShow(false);
    }
    setCurrentRoute(pathname);
  }, [pathname]);

  const handleLogout = () => {
    Cookies.remove("token");
    window.location.reload();
  };

  const Menus = [
    {
      key: "dashboard",
      title: "Dashboard",
      url: "/private",
      icon: faThLarge,
    },
    {
      key: "kost",
      title: "Kost",
      url: "/private/lol",
      icon: faHouse,
    },
    {
      key: "rooms",
      title: "Room",
      url: "/dashboard/room-management",
      icon: faBed,
    },
    {
      key: "customer",
      title: "Customer",
      url: "/dashboard/customer",
      icon: faUser,
    },
    {
      key: "booking",
      title: "Booking",
      url: "/dashboard/booking",
      icon: faCalendarPlus,
    },
    {
      key: "payment",
      title: "Payments",
      url: "/dashboard/payment",
      icon: faCreditCard,
    },
    {
      key: "maintenance",
      title: "Maintenance",
      url: "/dashboard/maintenance",
      icon: faScrewdriver,
    },
    {
      key: "expanses",
      title: "Expanses",
      url: "/dashboard/expanses",
      icon: faHandHoldingUsd,
    },
    {
      key: "reports",
      title: "Reports",
      url: "/dashboard/reports",
      icon: faChartBar,
    },
    {
      key: "user",
      title: "User",
      url: "/dashboard/user",
      icon: faUser,
    },

    // {
    //   key: "user",
    //   title: "User Management",
    //   url: "/dashboard/user-management",
    //   icon: faUser,
    // },
    // {
    //   key: "user2",
    //   title: "User Management",
    //   // url: "/dashboard/user-management",
    //   icon: faUser,
    //   child: [
    //     {
    //       key: "User",
    //       title: "User ",
    //       url: "/dashboard/user-management/user",
    //     },
    //     {
    //       key: "Role",
    //       title: "Role ",
    //       url: "/dashboard/user-management/role",
    //     },
    //   ],
    // },
  ];

  return (
    isShow && (
      <div
        className={`h-[100vh] sticky top-0 text-sweden-900 ease-in-out duration-300 border-r-[2px] border-sweden-600 relative shadow-[0px_4px_25px_rgba(255,255,255,0.25)] ${
          minified ? "w-[84px]" : "w-72"
        }`}
      >
        <div
          className="px-[20px] py-[14px] flex items-center gap-[10px] cursor-pointer hover:text-portage-600 border-b-[1px] border-white"
          onClick={() => setMinified(!minified)}
        >
          <div className="px-[10px] py-[5px] bg-sweden-400 text-sweden-500 rounded-[8px] text-2xl">
            {/* <h1 className="text-2xl text-white">m</h1> */}
            <FontAwesomeIcon icon={faMeteor} />
          </div>

          <div
            className={`ease-in duration-300 transition-opacity ${
              minified ? "opacity-0" : ""
            }`}
          >
            <h1
              className={`w-max text-lg font-bold ${minified ? "hidden" : ""}`}
            >
              Geshuku
            </h1>
          </div>
        </div>

        <div className="px-4 py-[20px] ">
          {Menus.map((menu: any, i: number) => {
            return (
              <Link
                href={menu.url}
                className={`flex cursor-pointer py-2 px-4 mb-2 rounded-[8px] duration-200 hover:text-sweden-200 hover:bg-sweden-100 ${
                  currentRoute === menu.url
                    ? "drop-shadow-xl bg-sweden-50 text-sweden-200 hover:bg-sweden-100"
                    : "hover:drop-shadow-xl"
                } `}
                key={i}
              >
                <div>
                  <FontAwesomeIcon
                    icon={menu.icon}
                    style={{ width: "24px" }}
                    className="text-[18px]"
                  />
                </div>
                <div
                  className={`ease-in duration-300 transition-opacity ${
                    minified ? "opacity-0" : ""
                  }`}
                >
                  <p
                    className={`w-max  text-base font-bold  pl-2 ${
                      minified ? "hidden" : ""
                    }`}
                  >
                    {menu.title}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="px-[16px] py-[20px] w-full absolute bottom-0">
          <div
            className={`flex py-[8px] px-4 w-full cursor-pointer mb-[10px] rounded-[8px] duration-200 hover:text-sweden-200 hover:drop-shadow-xl hover:bg-sweden-100 
               `}
            onClick={handleLogout}
          >
            <div>
              <FontAwesomeIcon
                icon={faRightFromBracket}
                style={{ width: "20px" }}
              />
            </div>
            <div
              className={`ease-in duration-300 transition-opacity ${
                minified ? "opacity-0" : ""
              }`}
            >
              <h1
                className={`w-max text-base font-bold  pl-2 ${
                  minified ? "hidden" : ""
                }`}
              >
                Logout
              </h1>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Sidebar;
