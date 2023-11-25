"use client";
import Link from "next/link";
import { ChangeLanguage } from "./ChangeLanguage";
import { useAppSelector, useAppDispatch } from "@/redux/hook";

export function Navigation() {
  const state = useAppSelector((state) => state.product);
  return (
    <section className="flex justify-center border border-black space-x-4 text-3xl uppercase p-4">
      <Link className="hover:text-black font-bold" href={"/"}>
      {state.language === "ESP" ? "INICIO" : "HOME"}
      </Link>
      <Link className="hover:text-black font-bold" href={"/agregarproducto"}>
      {state.language === "ESP" ? "AGREGAR PRODUCTO" : "ADD PRODUCT"}
      </Link>
      <ChangeLanguage />
    </section>
  );
}
