import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header className="bg-slate-700 px-2">
        <div className="mx-auto max-w-6xl py-10 px-5">
          <h1 className="text-3xl font-extrabold text-white  ">
            Administrador de Productos
          </h1>
        </div>
      </header>
      <main className="mt-10 mx-auto max-w-6xl py-10 px-5 bg-white">
        <Outlet />
      </main>
    </>
  );
}
