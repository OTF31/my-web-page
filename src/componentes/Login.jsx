import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

// Esquema
const validationSchema = yup.object({
  user: yup.string().required("Usuario requerido"),
  password: yup
    .string()
    .required("Contraseña requerida")
    .min(4, "Debe de tener al menos 4 caracteres"),
});

const Login = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = (data) => alert(JSON.stringify(data, null, 2));

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border-primary-colors mx-auto mt-8 grid h-64 w-[80%] grid-cols-1 grid-rows-[2fr_2fr_1fr] justify-items-center rounded-xl border-8 border-primary-color/40 p-2 font-[Montserrat] text-[14px] md:w-[50%] md:text-[18px] lg:w-[35%]"
      >
        <div className="w-[95%]">
          <label htmlFor="user" className="block">
            Usuario:
          </label>
          <input
            {...register("user")}
            type="text"
            className="block w-full rounded-sm border-2 border-primary-color/50 px-[3px]"
          />
          <p className="absolute mt-px text-[14px] font-bold text-red-900">
            {errors.user?.message}
          </p>
        </div>

        <div className="w-[95%]">
          <label className="block" htmlFor="password">
            Contraseña:
          </label>
          <input
            {...register("password")}
            type="password"
            className="block w-full rounded-sm border-2 border-primary-color/50 px-[3px]"
          />
          <p className="absolute mt-px text-[14px] font-bold text-red-900">
            {errors.password?.message}
          </p>
        </div>

        <div className="w-[95%]">
          <button
            className="w-full justify-self-stretch rounded-md border-2 border-secondary-color bg-primary-color/90 p-2 text-sm text-white hover:scale-95 hover:border-primary-color hover:bg-secondary-color hover:text-black"
            type="submit"
          >
            Ingresar
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
