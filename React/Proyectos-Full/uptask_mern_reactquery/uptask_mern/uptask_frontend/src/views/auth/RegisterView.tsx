import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { UserRegistrationForm } from "../../types";
import ErrorMessage from "../../components/ErrorMessage";
import { createAccount } from "../../api/AuthAPI";
import { toast } from "react-toastify";

export default function RegisterView() {
  const initialValues: UserRegistrationForm = {
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  };

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<UserRegistrationForm>({ defaultValues: initialValues });

  const { mutate } = useMutation({
    mutationFn: createAccount,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      toast.success(data);
      reset();
    },
  });

  // funcion de react-hook-form, rebiza y compara las contraseñas
  const password = watch("password");

  const handleRegister = (formData: UserRegistrationForm) => {
    mutate(formData);
  };

  return (
    <>
      <h1 className="text-4xl font-black text-white">Crear Cuenta</h1>
      <p className="text-xl font-light text-white mt-3">
        Llena el formulario para {""}
        <span className=" text-fuchsia-500 font-bold"> crear tu cuenta</span>
      </p>

      <form
        onSubmit={handleSubmit(handleRegister)}
        className="space-y-8 p-7  bg-white mt-5"
        noValidate
      >
        <div className="flex flex-col gap-2">
          <label className="font-normal text-xl" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email de Registro"
            className="w-full p-2  border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-b-fuchsia-700 focus:shadow-md focus:shadow-fuchsia-400 leading-tigh"
            {...register("email", {
              required: "El Email de registro es obligatorio",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "E-mail no válido",
              },
            })}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-normal text-xl">Nombre</label>
          <input
            type="name"
            placeholder="Nombre de Registro"
            className="w-full p-2  border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-b-fuchsia-700 focus:shadow-md focus:shadow-fuchsia-400 leading-tigh"
            {...register("name", {
              required: "El Nombre de usuario es obligatorio",
            })}
          />
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-normal text-xl">Password</label>

          <input
            type="password"
            placeholder="Password de Registro"
            className="w-full p-2  border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-b-fuchsia-700 focus:shadow-md focus:shadow-fuchsia-400 leading-tigh"
            {...register("password", {
              required: "El Password es obligatorio",
              minLength: {
                value: 8,
                message: "El Password debe ser mínimo de 8 caracteres",
              },
            })}
          />
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-normal text-xl">Repetir Password</label>

          <input
            id="password_confirmation"
            type="password"
            placeholder="Repite Password de Registro"
            className="w-full p-2  border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-b-fuchsia-700 focus:shadow-md focus:shadow-fuchsia-400 leading-tigh"
            {...register("password_confirmation", {
              required: "Repetir Password es obligatorio",
              validate: (value) =>
                value === password || " Los Passwords no son iguales",
            })}
          />

          {errors.password_confirmation && (
            <ErrorMessage>{errors.password_confirmation.message}</ErrorMessage>
          )}
        </div>

        <input
          type="submit"
          value="Registrarme"
          className="bg-fuchsia-600 hover:bg-fuchsia-700 w-full p-3  text-white font-black  text-xl cursor-pointer"
        />
      </form>
      <nav className="mt-5 flex flex-col space-y-4">
        <Link
          className="text-center text-gray-300 font-normal"
          to={"/auth/login"}
        >
          ¿Ya tienes cuenta? Iniciar Sesión
        </Link>
        <Link
          className="text-center text-gray-300 font-normal"
          to={"/auth/forgot-password"}
        >
          ¿Olvidate tu contraseña? Restablecer
        </Link>
      </nav>
    </>
  );
}
