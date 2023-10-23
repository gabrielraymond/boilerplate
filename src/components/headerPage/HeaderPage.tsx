'use client'
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

interface Props {
  title: string;
  button?: any;
  root?: any;
  description?: string;
  back?: boolean;
}

const HeaderPage = ({ title, button, root, description, back }: Props) => {
  const router = useRouter();

  return (
    <div
      className="w-full rounded-[8px] p-2.5 text-portage-850 flex justify-between mb-3"
      style={{
        boxShadow: "0px 4px 25px rgba(255, 255, 255, 0.25)",
      }}
    >
      <div>
        <div className="flex ">
          {back && (
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="py-2 pr-4 text-lg cursor-pointer"
              onClick={() => router.back()}
            />
          )}
          <h1 className="font-bold text-3xl mb-2">{title}</h1>
        </div>

        <p>{description}</p>
        <div className="flex gap-[10px]">{root}</div>
      </div>
      <div>{button}</div>
    </div>
  );
};

export default HeaderPage;
