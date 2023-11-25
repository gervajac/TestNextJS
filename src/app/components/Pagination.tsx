"use client";
import react, { useEffect } from "react";
import { deleteProduct, fetchProducts } from "@/redux/features/productSlice";
import { useAppSelector, useAppDispatch } from "@/redux/hook";

export function Pagination() {
  const state = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts({page: null}));
  }, []);
  console.log(state.arrayPages, "pags");

  const handleChangePage = (e: any) => {
    dispatch(fetchProducts({page: e}));
  }
console.log(state, "st")
  return (
    <section className="flex justify-center flex-row w-auto">
      {state.arrayPages &&
        state.arrayPages.map((e: number) => {
          return <button onClick={() => handleChangePage(e)} className={`flex justify-center ${state.currentPage === e.toString() ? "text-black" : "text-white"} text-7xl`}>{e}</button>;
        })}
    </section>
  );
}
