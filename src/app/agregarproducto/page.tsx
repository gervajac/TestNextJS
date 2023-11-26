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

const AgregarProducto: React.FC = () => {
  const state = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();
  const [succes, setSucces] = useState<any>(false);
  const [empty, setEmpty] = useState(false);
  const [productoInfo, setProductoInfo] = useState<AgregarProductoProps>({
    product: "",
    price: 0,
    section: "",
    image: "",
    brand: "",
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setProductoInfo({ ...productoInfo, [name]: value });
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value, name } = e.target;
    setProductoInfo({ ...productoInfo, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      productoInfo.product &&
      productoInfo.brand &&
      productoInfo.section &&
      productoInfo.image &&
      productoInfo.price !== 0 &&
      productoInfo.price
    ) {
      console.log(productoInfo, "prod");
      dispatch(addProduct({ productoInfo: productoInfo }))
        .unwrap()
        .then((data) => {
          console.log("Producto agregado exitosamente:", data);
          setSucces(true);
        })
        .catch((error) => {
          console.error("Error al agregar el producto:", error);
        });
    } else {
      console.log(productoInfo, "prod");
      setEmpty(true);
    }
  };

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
            <option className="text-gray-300" value="">
              Elegir Seccion
            </option>
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
        {succes ? <h1>El producto fue agregado correctamente</h1> : null}
        {empty ? <h1>Faltan completar campos</h1> : null}
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
