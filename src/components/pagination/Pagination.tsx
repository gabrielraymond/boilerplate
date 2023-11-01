import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState, useEffect, useCallback } from "react";

interface PaginationProps {
  showTotal: boolean;
  currentPage: number;
  // totalPages: number;
  // onPageChange: (page: number) => void;
  totalItems: number; // Total number of items
  itemsPerPage: number; // Number of items per page
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,

  // onPageChange,
  totalItems,
  itemsPerPage,
  showTotal,
}) => {
  const [isDisabledPrev, setIsDisabledPrev] = useState(false);
  const [isDisabledNext, setIsDisabledNext] = useState(false);
  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(currentPage * itemsPerPage, totalItems);
  let totalPages = Math.ceil(totalItems / itemsPerPage);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  const createQueryString = useCallback(
    (name: string, value: any) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    if (currentPage > 1) {
      setIsDisabledPrev(false);
    } else {
      setIsDisabledPrev(true);
    }

    if (currentPage < totalPages) {
      setIsDisabledNext(false);
    } else {
      setIsDisabledNext(true);
    }
  }, [currentPage]);

  const handlePagination = (page: any) => {
    router.push(pathname + "?" + createQueryString("current_page", page));
  };

  const handlePrev = () => {
    console.log(totalPages);
    if (currentPage > 0) {
      router.push(
        pathname + "?" + createQueryString("current_page", currentPage - 1)
      );
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      router.push(
        pathname + "?" + createQueryString("current_page", currentPage + 1)
      );
    }
  };

  return (
    <div className="flex justify-between items-center">
      {showTotal && (
        <p>
          {startIndex} - {endIndex} of {totalItems} items
        </p>
      )}

      <nav className="flex justify-center my-4">
        <button
          className={`px-3 py-1 rounded-lg mr-2 cursor-pointer hover:bg-portage-300 hover:text-portage-50 disabled:text-portage-200 disabled:bg-transparent disabled:cursor-no-drop`}
          onClick={() => handlePrev()}
          disabled={isDisabledPrev}
        >
          {"<"}
        </button>

        <ul className="flex space-x-2">
          {pages.map((page) => (
            <li key={page}>
              <button
                className={`${
                  currentPage === page
                    ? "bg-portage-400 text-portage-50"
                    : "bg-grey-200  text-grey-700 hover:bg-portage-300 hover:text-portage-50"
                } px-3 py-1 rounded-lg`}
                onClick={() => handlePagination(page)}
              >
                {page}
              </button>
            </li>
          ))}
        </ul>

        <button
          className={`px-3 py-1 rounded-lg ml-2 cursor-pointer hover:bg-portage-300 hover:text-portage-50 disabled:text-portage-200 disabled:bg-transparent disabled:cursor-no-drop`}
          onClick={() => handleNext()}
          disabled={isDisabledNext}
        >
          {">"}
        </button>
      </nav>
    </div>
  );
};

export default Pagination;
