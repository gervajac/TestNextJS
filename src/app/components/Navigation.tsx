import Link from "next/link";

export function Navigation() {
  return (
    <section className="flex justify-center space-x-4 text-3xl uppercase p-4">
      <Link className="hover:text-black" href={"/"}>
        Home
      </Link>
      <Link className="hover:text-black" href={"/agregarproducto"}>
        Agregar Producto
      </Link>
    </section>
  );
}
