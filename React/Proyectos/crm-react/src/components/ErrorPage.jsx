import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="space-y-8">
      <h1 className="text-center text-5xl font-extrabold mt-10 text-blue-700">
        CRM - Clientes
      </h1>
      <p className="text-center text-xl">Hubo un Error</p>
      <p className="text-center text-xl">{error.statusText || error.message}</p>
    </div>
  );
}
