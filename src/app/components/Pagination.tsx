"use client";
import React from "react";
import usePagination from "../hooks/usePagination";
import { useAppSelector } from "@/redux/hook";

export function Pagination() {
  const state = useAppSelector((state) => state.product);
  const { handleChangePage } = usePagination();

  return (
    <section className="flex justify-center flex-row w-auto">
      {state.arrayPages &&
        state.arrayPages.map((pageNumber: number) => (
          <button
            key={pageNumber}
            onClick={() => handleChangePage(pageNumber)}
            className={`flex justify-center ${state.currentPage === pageNumber.toString() ? "text-black" : "text-white"} text-7xl`}
          >
            {pageNumber}
          </button>
        ))}
    </section>
  );
}
