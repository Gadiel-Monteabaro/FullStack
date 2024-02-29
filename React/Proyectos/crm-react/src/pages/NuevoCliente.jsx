import { useNavigate, Form, useActionData, redirect } from "react-router-dom";
import Formulario from "../components/Formulario";
import Error from "../components/Error";
import { agregarCliente } from "../data/clientes";

// Procesar la entrada de datos en un Formulario
export async function action({ request }) {
  // request, formDate informacion de un formulario
  const formData = await request.formData();
  // formData.get("nombre"), una forma de obtener datos
  const datos = Object.fromEntries(formData);
  const email = formData.get("email");

  // Validacion de los datos
  const errores = [];
  if (Object.values(datos).includes("")) {
    errores.push("Todos los campos son obligatorios.");
  }

  // Expresion regular para validar el email.
  let regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );
  if (!regex.test(email)) {
    errores.push("El Email no es valido.");
  }

  // Connfirmar si hay errores en el arreglo
  if (Object.keys(errores).length) {
    // Retornar datos si hay errores
    return errores;
  }

  await agregarCliente(datos);

  return redirect("/");
}

const NuevoCliente = () => {
  const navigate = useNavigate();
  const errores = useActionData();

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Nuevo Cliente</h1>
      <p className="mt-3">Registrar Nuevo Cliente</p>
      <div className="flex justify-end">
        <button
          className="bg-blue-800 text-white px-3 py-1 font-bold uppercase shadow-md shadow-blue-500/95"
          onClick={() => navigate("/")}
        >
          Volver
        </button>
      </div>
      <div className="rounded-md md:w-3/4 mx-auto px-5">
        {errores?.length &&
          errores.map((error, i) => <Error key={i}>{error}</Error>)}
        <Form method="POST" noValidate>
          <Formulario />
          <input
            type="submit"
            className="mt-3 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg cursor-pointer"
            value="Registrar Cliente"
          />
        </Form>
      </div>
    </>
  );
};

export default NuevoCliente;
