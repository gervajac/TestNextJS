"use client";
import { fetchProducts } from "@/redux/features/productSlice";
import { useAppSelector, useAppDispatch } from "@/redux/hook";
import { useEffect } from "react";
import { Product } from "./Product";
import { Pagination } from "./Pagination";

export function ProductSection() {
  const state = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();

  console.log(state.products);
  return (
    <section className="flex space-y-1 justify-center flex-col w-[1000px]">
      {state.products.map((product: any) => (
        <Product
          key={product.id}
          price={product.price}
          product={product.product}
          brand={product.brand}
          section={product.section}
          image={product.image}
          id={product.id}
        />
      ))}
    </section>
  );
}
