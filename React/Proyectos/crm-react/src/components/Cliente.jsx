import { useNavigate, Form, redirect } from "react-router-dom";
import { eliminarCliente } from "../data/clientes";

export async function action({ params }) {
  await eliminarCliente(params.clienteId);
  return redirect("/");
}

const Cliente = ({ cliente }) => {
  const navigate = useNavigate();
  const { id, nombre, telefono, email, empresa } = cliente;

  return (
    <tr className="border-b">
      <td className="p-3 space-y-1">
        <p className="text-lg font-bold text-gray-600">{nombre}</p>
        <p>{empresa}</p>
      </td>
      <td className="p-3">
        <p className="text-lg font-bold text-gray-600">
          <span className="text-gray-800 uppercase font-bold">Email:</span>{" "}
          {email}
        </p>
        <p className="text-lg font-bold text-gray-600">
          <span className="text-gray-800 uppercase font-bold">Tel:</span>{" "}
          {telefono}
        </p>
      </td>
      <td className="p-3  gap-3 flex justify-center text-center">
        <button
          type="button"
          className="text-blue-500 hover:text-blue-800 uppercase font-bold text-sm p-3"
          onClickCapture={() => navigate(`/clientes/${id}/editar`)}
        >
          Editar
        </button>
        <Form
          method="POST"
          action={`/clientes/${id}/eliminar`}
          onSubmit={(e) => {
            if (!confirm("¿Deseas eliminar este Cliente?")) {
              e.preventDefault();
            }
          }}
        >
          <button
            type="submit"
            className="text-red-500 hover:text-red-800 uppercase  font-bold text-sm p-3"
          >
            Eliminar
          </button>
        </Form>
      </td>
    </tr>
  );
};

export default Cliente;
