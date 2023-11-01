import React from "react";

const BodyTable = (props: any) => {
  const { columns, data } = props;
  return (
    <tbody className=" text-sweden-800">
      {data?.map((d: any, idx: number) => {
        return (
          <tr className="border-b-[1px]  border-b-portage-400" key={idx}>
            {columns.map((c: any, i: number) => {
              return (
                <td scope="row" className=" p-3.5" key={i}>
                  {c.render
                    ? c.render(d?.[c.dataIndex], d, idx)
                    : d?.[c.dataIndex]}
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

export default BodyTable;
