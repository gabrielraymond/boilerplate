import React from "react";
import HeadTable from "./HeadTable";
import BodyTable from "./BodyTable";
import Pagination from "../pagination/Pagination";

interface Props {
  data: any;
  columns: any[];
  isLoading: boolean;
}

const Table = (props: Props) => {
  const { data, columns, isLoading } = props;

  return (
    <div className="relative  bg-sweden-600 rounded-lg">
      {isLoading && (
        <div className="bg-portage-50 w-full h-full absolute opacity-60"></div>
      )}

      <table
        className="w-full text-sm text-left text-sweden-800 light:text-gray-400 "
        data-testid="table-component"
      >
        <HeadTable columns={columns} />

        <BodyTable data={data?.data} columns={columns} />
      </table>

      <Pagination
        currentPage={data?.current_page}
        // onPageChange={handlePagination}
        // totalPages={Math.min(data?.total_items / data?.per_page)}
        totalItems={data?.total_items}
        itemsPerPage={data?.per_page}
        showTotal={true}
      />
    </div>
  );
};

export default Table;
