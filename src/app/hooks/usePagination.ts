"use client"
import { useEffect } from "react";
import { fetchProducts } from "@/redux/features/productSlice";
import { useAppDispatch } from "@/redux/hook";

const usePagination = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts({ page: null }));
  }, [dispatch]);

  const handleChangePage = (pageNumber: number) => {
    dispatch(fetchProducts({ page: pageNumber }));
  };

  return { handleChangePage };
};

export default usePagination;