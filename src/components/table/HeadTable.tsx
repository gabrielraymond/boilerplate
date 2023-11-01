import React from "react";

const HeadTable = (props: any) => {
  const { columns } = props;
  return (
    <thead className="text-xs  text-sweden-500 h-[50px] uppercase bg-sweden-50 rounded-lg">
      <tr>
        {columns?.map((data: any, i: number) => {
          return (
            <th
              scope="col"
              className={`px-3.5 py-3 ${data.width && data.width} font-extrabold ${
                i === 0 && "rounded-l-lg"
              } ${i === columns.length - 1 && "rounded-r-lg"} `}
              key={i}
            >
              <div className="flex justify-between items-center">
                {data.title}
                {i !== columns.length - 1 && (
                  <div className="h-[15px] border-r-2"></div>
                )}
              </div>
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default HeadTable;
