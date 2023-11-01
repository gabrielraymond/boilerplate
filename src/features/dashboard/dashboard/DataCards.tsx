import DataCard from "@/components/dataCard/DataCard";
import { faBed, faDollarSign, faMoneyBill, faWrench } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const DataCards = () => {
  return (
    <div className="grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6 flex-auto">
      <DataCard
        label="Revenue"
        value="15.000.000"
        currency="Rp"
        icon={<FontAwesomeIcon icon={faMoneyBill} />}
        background="bg-gradient-to-r from-sweden-50 to-sweden-100 text-white"
      />
      <DataCard
        label="Expanse"
        value="2.000.000"
        currency="Rp"
        icon={<FontAwesomeIcon icon={faDollarSign} />}
        background="bg-gradient-to-r from-sweden-800 to-sweden-900 text-white"
      />
      <DataCard
        label="Occupancy Status"
        value="15/20"
        currency="Rooms"
        icon={<FontAwesomeIcon icon={faBed} />}
        background="bg-gradient-to-r from-sweden-400 to-sweden-300 text-white"
      />
      <DataCard
        label="Maintenance Requests"
        value="3"
        icon={<FontAwesomeIcon icon={faWrench} />}
        background="bg-gradient-to-r from-sweden-100 to-sweden-800 text-white"
      />
    </div>
  );
};

export default DataCards;
