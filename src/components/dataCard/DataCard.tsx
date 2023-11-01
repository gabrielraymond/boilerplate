import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface Props {
  label: string;
  value: string;
  icon: any;
  background: string;
  currency?: string;
}

const DataCard = ({ label, value, icon, background, currency }: Props) => {
  return (
    <div
      className={`border-2 flex rounded-lg py-4 px-6 gap-4 w-full justify-between ${background}`}
    >
      <div>
        <h1 className="text-lg mb-2 w-max">{label}</h1>
        <h2 className="text-3xl">
          {currency && <span className=" text-lg">{currency} </span>}
          {value}
        </h2>
      </div>
      <div className="text-2xl ">{icon}</div>
    </div>
  );
};

export default DataCard;
