"use client";
import ActionButton from "@/components/button/ActionButton";
import Chip from "@/components/button/Chip";
import Button from "@/components/button/button";
import Container from "@/components/container/Container";
import FooterDashboard from "@/components/footer/FooterDashboard";
import HeaderPage from "@/components/headerPage/HeaderPage";
import Table from "@/components/table/Table";
import { capitalizeFirstLetter } from "@/helpers/utils";
import React, { useState } from "react";
import { kostData } from "./dummyData";

interface DataKost {
  _id: string | number;
  kost_name: string;
  contact: string;
  availability_status: string;
  room_availability: number;
  address: string;
  ratings: number;
  description: string;
  features: string;
  photos: any;
  amenities: any;
}

const Property = () => {
  const [isCreateShow, setIsCreateShow] = useState<boolean>(false);
  const [isDetailShow, setIsDetailShow] = useState<boolean>(false);
  const [isUpdateShow, setIsUpdateShow] = useState<boolean>(false);
  const [isDeleteShow, setIsDeleteShow] = useState<boolean>(false);
  const [dataDetail, setDataDetail] = useState<DataKost>();

  const handleOpenDetail = (data: DataKost) => {
    setIsDetailShow(true);
    setDataDetail(data);
  };

  const handleOpenUpdate = (data: DataKost) => {
    setIsUpdateShow(true);
    setDataDetail(data);
  };

  const handleOpenDelete = (data: DataKost) => {
    setIsDeleteShow(true);
    setDataDetail(data);
  };

  const columns = [
    {
      key: "no",
      title: "No",
      dataIndex: "id",
      width: "w-[70px]",
      render: (text: any, record: any, idx: number) => <span>{idx + 1}</span>,
    },

    {
      key: "id",
      title: "Action",
      dataIndex: "_id",
      width: "w-[180px]",
      render: (text: any, record: any) => (
        <div className="flex gap-3">
          <ActionButton type="view" onClick={() => handleOpenDetail(record)} />
          <ActionButton type="edit" onClick={() => handleOpenUpdate(record)} />
          <ActionButton
            type="delete"
            onClick={() => handleOpenDelete(record)}
          />
        </div>
      ),
    },
    {
      key: "name",
      title: "Name",
      dataIndex: "kost_name",
      // width:'w-[200px]',
    },
    {
      key: "status",
      title: "Status",
      dataIndex: "status",
      // width: "w-[200px]",
      render: (text: any, record: any, idx: number) => (
        <Chip
          status={`${
            text === "open"
              ? "green"
              : text === "full"
              ? "blue"
              : text === "vacancies"
              ? "purple"
              : text === "under_renovation"
              ? "orange"
              : text === "closed"
              ? "red"
              : "grey"
          }`}
        >
          {capitalizeFirstLetter(text)}
        </Chip>
      ),
    },
    {
      key: "room",
      title: "Room Availability",
      dataIndex: "room_availability",
      // width: "w-[200px]",
    },
    {
      key: "contact",
      title: "Contact",
      dataIndex: "contact",
      // width:'w-[200px]',
    },

    {
      key: "description",
      title: "Description",
      dataIndex: "description",
      render: (text: any) => (
        <span>
          {text.substring(0, 20)}
          {text.length >= 20 && "..."}
        </span>
      ),
    },
    {
      key: "rating",
      title: "Ratings",
      dataIndex: "ratings",
      render: (text: number) => {
        const stars = [];
        for (let i = 1; i <= text; i++) {
          // Determine whether the current star should be filled or empty based on the rating
          const starClassName = i <= text ? "filled" : "empty";

          // Push the star element to the stars array
          stars.push(
            <span key={i} className={`star ${starClassName}`}>
              &#9733; {/* Unicode character for a star */}
            </span>
          );
        }
        return <>{stars}</>;
      },
    },
  ];

  return (
    <Container>
      <HeaderPage
        title="Property"
        description="Lorem Ipsum..."
        button={
          <Button
            label="+Property"
            style="primary"
            size="large"
            state="regular"
          />
        }
      />
      <div className="p-6 bg-sweden-600 rounded-lg shadow-inner">
        <Table data={kostData} columns={columns} isLoading={false} />
      </div>
      
    </Container>
  );
};

export default Property;
