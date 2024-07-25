import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ForgotPasswordForm } from "../../types";
import ErrorMessage from "../../components/ErrorMessage";
import { useMutation } from "@tanstack/react-query";
import { forgotPassword } from "../../api/AuthAPI";
import { toast } from "react-toastify";

export default function ForgotPasswordView() {
  const navigate = useNavigate();
  const initialValues: ForgotPasswordForm = {
    email: "",
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });

  const { mutate } = useMutation({
    mutationFn: forgotPassword,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      toast.success(data);
      reset();
      navigate("/auth/forgot-password");
    },
  });

  const handleForgotPassword = (formData: ForgotPasswordForm) => {
    mutate(formData);
  };

  return (
    <>
      <h1 className="text-3xl font-black text-white">Restablecer Contraseña</h1>
      <p className="text-xl font-light text-white mt-3">
        Ingresa tu email para {""}
        <span className=" text-fuchsia-500 font-bold">
          Restablecer Contraseña
        </span>
      </p>
      <form
        onSubmit={handleSubmit(handleForgotPassword)}
        className="space-y-8 p-10 mt-5 rounded-md bg-white"
        noValidate
      >
        <div className="flex flex-col gap-3">
          <label className="  text-lg font-semibold" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email de Registro"
            className="w-full p-2  border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-b-fuchsia-700 focus:shadow-md focus:shadow-fuchsia-400 leading-tigh transition-colors"
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

        <input
          type="submit"
          value="Enviar Instrucciones"
          className="bg-fuchsia-600 hover:bg-fuchsia-700 rounded-md w-full p-2  text-white font-black  text-xl cursor-pointer"
        />
      </form>

      <nav className="mt-10 flex flex-col space-y-4">
        <Link
          to="/auth/login"
          className="text-center text-gray-300 font-normal"
        >
          ¿Ya tienes cuenta? Iniciar Sesión
        </Link>

        <Link
          to="/auth/register"
          className="text-center text-gray-300 font-normal"
        >
          ¿No tienes cuenta? Crea una
        </Link>
      </nav>
    </>
  );
}
