import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// components __ componentes reutilizables
import Layout from "./components/Layout";
// pages __ paginas definidas en react-Router-DOM
import NuevoCliente, {
  action as nuevoClienteAction,
} from "./pages/NuevoCliente";
import Index, { loader as clientesLoader } from "./pages/Index";
import EditarCliente, {
  loader as editarClienteLoader,
  action as editarClienteAction,
} from "./pages/EditarCliente";
import { action as eliminarClienteAction } from "./components/Cliente";
import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: clientesLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: "/clientes/nuevo",
        element: <NuevoCliente />,
        action: nuevoClienteAction,
        errorElement: <ErrorPage />,
      },
      {
        path: "/clientes/:clienteId/editar",
        element: <EditarCliente />,
        loader: editarClienteLoader,
        action: editarClienteAction,
        errorElement: <ErrorPage />,
      },
      {
        path: "/clientes/:clienteId/eliminar",
        action: eliminarClienteAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
