import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Pagination from "./Pagination";
import "@testing-library/jest-dom";

test("renders pagination buttons correctly", () => {
  const onPageChange = jest.fn();

  const { getByText } = render(
    <Pagination
      currentPage={3}
      totalPages={5}
      onPageChange={onPageChange}
      totalItems={48}
      itemsPerPage={10}
      showTotal={true}
    />
  );

  const page1Button = getByText("1");
  const page2Button = getByText("2");
  const page3Button = getByText("3");
  const page4Button = getByText("4");
  const page5Button = getByText("5");

  expect(page1Button).toBeInTheDocument();
  expect(page2Button).toBeInTheDocument();
  expect(page3Button).toBeInTheDocument();
  expect(page4Button).toBeInTheDocument();
  expect(page5Button).toBeInTheDocument();

  fireEvent.click(page2Button);
  expect(onPageChange).toHaveBeenCalledWith(2);
});
