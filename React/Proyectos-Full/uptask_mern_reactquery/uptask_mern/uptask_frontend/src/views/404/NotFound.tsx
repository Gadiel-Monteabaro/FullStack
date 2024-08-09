import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <>
      <div>
        <h1 className="font-black text-center text-2xl text-white">
          Pagina No Encontrada
        </h1>
        <p className="mt-5 text-center text-white">
          Tal vez quieres volver a{" "}
          <Link to={"/"} className="text-fuchsia-500">
            Proyectos
          </Link>
        </p>
      </div>
    </>
  );
}
