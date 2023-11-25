"use client";
import react, { useState } from "react";
import { useAppSelector, useAppDispatch } from "@/redux/hook";

export function CalculateValue() {
  const state = useAppSelector((state) => state.product);
  const [avgPrice, setAvgPrice] = useState(0);

  const handleCalculate = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSection = e.target.value;
    const productsInSection = state.totalProducts.filter(
      (product: any) => product.section === selectedSection
    );
    const averagePrice =
      productsInSection.reduce(
        (sum: any, product: any) => sum + product.price,
        0
      ) / productsInSection.length;
    setAvgPrice(averagePrice);
  };

  return (
    <div className="flex flex-col justify-center text-black">
      <label className="flex justify-center text-2xl text-semibold">
        Calcular promedio de Precios por SECCION
      </label>
      <div className="flex flex-row">
        <select
          onChange={(e) => handleCalculate(e)}
          placeholder="Seccion"
          className="flex border border-black p-2 w-[200px]"
        >
          <option className="text-gray-300" value="">
            Seccion
          </option>
          <option value="Blanqueria">Blanqueria</option>
          <option value="Remeras">Remeras</option>
          <option value="Jeans">Jeans</option>
          <option value="Accesorios">Accesorios</option>
        </select>
        <span className="flex justify-center items-center space-x-3">
          <h1 className="font-semibold texxt-xl">PROMEDIO:</h1>
          <h1 className="font-semibold text-3xl">
            {avgPrice ? avgPrice.toFixed(2) : 0}
          </h1>
          <h1 className="text-green-800 font-bold text-2xl">USD</h1>
        </span>
      </div>
    </div>
  );
}
