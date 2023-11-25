"use client";
import { deleteProduct } from "@/redux/features/productSlice";
import { useAppSelector, useAppDispatch } from "@/redux/hook";
import { useEffect } from "react";
import Image from "next/image";
import Delete from "../../assets/delete.svg";
import Edit from "../../assets/edit.svg";
import Link from "next/link";
export function Product({ price, product, brand, section, image, id }: any) {
  const state = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();
  const handleDelete = (id: String) => {
    dispatch(deleteProduct({ id: id, currentPage: state.currentPage }));
  };

  return (
    <section className="flex bg-stone-400 flex-row h-[120px] border border-black">
      <div className="flex w-[150px] h-full">
        <img className="flex w-full h-full" src={image}></img>
      </div>
      <div className="flex flex-col w-full h-full">
        <div className="flex h-[30px] bg-stone-500 justify-end p-1">{section}</div>
        <div className="ml-2">
          <h1 className="text-2xl font-semibold">{product}</h1>
          <h1 className="text-sm font-thin">{brand}</h1>
        </div>
      </div>
      <div className="flex w-[100px] justify-center items-center h-full">
        <span className="flex flex-row">
          <h1 className="text-xl font-bold">${price}</h1>
          <h1 className="text-bold text-green-500">USD</h1>
        </span>
      </div>
      <div className="flex w-[100px] justify-center items-center h-full">
        <span className="flex flex-row space-x-2">
          <button onClick={() => handleDelete(id)}>
            <Image src={Delete} className="w-[30px]" alt="Delete" />
          </button>
          <Link href={`/agregarproducto/${id}`}>
            <Image src={Edit} className="w-[30px]" alt="Delete" />
          </Link>{" "}
        </span>
      </div>
    </section>
  );
}
