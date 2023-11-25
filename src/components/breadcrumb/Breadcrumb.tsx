'use client'
import { DASHBOARD } from "@/constants/path";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface PropsBreadcrumb {
  icon: boolean;
}

const Breadcrumb = ({ icon }: PropsBreadcrumb) => {
  const path = usePathname();
  const pathnames = path.split("/").filter((x) => x);

  return (
    <nav>
      <div className="container mx-auto">
        <ol className="list-none p-0 flex">
          <li className="flex items-center">
            <Link href={DASHBOARD} className="text-sweden-900">
              {icon ? <FontAwesomeIcon icon={faHome} /> : "Home"}
            </Link>
          </li>
          {pathnames.map((pathname, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;
            return (
              <li className="flex items-center" key={pathname}>
                {!isLast ? (
                  <>
                    <span className="mx-2 text-grey-500">/</span>
                    <Link href={routeTo} className="text-sweden-50">
                      {pathname}
                    </Link>
                  </>
                ) : (
                  <>
                    <span className="mx-2 text-grey-500">/</span>
                    <span className=" text-sweden-700"> {pathname}</span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;
