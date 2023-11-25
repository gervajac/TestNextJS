"use client";
import React, { useState } from "react";
import { addProduct } from "@/redux/features/productSlice";
import { Title } from "../components/Title";
import { useAppSelector, useAppDispatch } from "@/redux/hook";

interface AgregarProductoProps {
  product: string;
  price: number;
  section: string;
  image: string;
  brand: string;
}

const AgregarProducto: React.FC<AgregarProductoProps> = () => {
  const state = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();
  const [advice, setAdvice] = useState<any>("");
  const [empty, setEmpty] = useState(false);
  const [productoInfo, setProductoInfo] = useState<AgregarProductoProps>({
    product: "",
    price: 0,
    section: "",
    image: "",
    brand: "",
  });
  const [validation, setValidation] = useState<any>({
    product: true,
    price: true,
    section: true,
    image: true,
    brand: true,
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setProductoInfo({ ...productoInfo, [name]: value });
    setValidation({ ...validation, [name]: value!== "" ? false : true });
  };
  
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value, name } = e.target;
    setProductoInfo({ ...productoInfo, [name]: value });
    setValidation({ ...validation, [name]: value !== "" ? false : true});
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = Object.values(validation).every((value) => value);
  
    if (!isValid) {
      dispatch(addProduct({productoInfo: productoInfo}))
        .unwrap()
        .then((data) => {
          console.log("Producto agregado exitosamente:", data);
        })
        .catch((error) => {
          console.error("Error al agregar el producto:", error);
        });
    } else {
      const emptyFields = Object.keys(validation).filter((field) => validation[field]);
      setEmpty(true);
      setAdvice(emptyFields);
    }
  };

  console.log(validation);

  return (
    <section>
      <Title />
      <form
        className="w-full h-screen max-w-lg mx-auto"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="product"
          >
            Producto
          </label>
          <input
            type="text"
            name="product"
            placeholder="Ingresa el nombre del producto"
            id="producto"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => handleInput(e)}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="price"
          >
            Precio
          </label>
          <input
            type="number"
            id="price"
            placeholder="Ingresa el precio del producto"
            name="price"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Marca
          </label>
          <input
            type="text"
            name="brand"
            id="price"
            placeholder="Ingresa la marca del producto"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="price"
          >
            Seccion
          </label>
          <select
            name="section"
            className="shadow appearance-none border rounded
            w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none
            focus:shadow-outline"
            onChange={(e) => handleSelect(e)}
          >
            <option value="Blanqueria">Blanqueria</option>
            <option value="Jeans">Jeans</option>
            <option value="Remeras">Remeras</option>
            <option value="Accesorios">Accesorios</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="price"
          >
            Imagen
          </label>
          <input
            type="text"
            name="image"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => handleInput(e)}
          />
        </div>
        {empty ? <h1>Faltan completar los campos: {advice.join(", ")}</h1> : null}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Agregar Producto
        </button>
      </form>
    </section>
  );
};

export default AgregarProducto;
