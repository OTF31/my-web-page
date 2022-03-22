import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Login = (props) => {
  // Esquema
  const validationSchema = Yup.object({
    user: Yup.string().required("Usuario requerido"),
    password: Yup.string()
      .required("Contraseña requerida")
      .min(4, "Debe de tener al menos 4 caracteres"),
  });

  // Valores iniciales
  const initialValues = {
    user: "",
    password: "",
  };

  const renderError = (message) => (
    <p className="absolute mt-2 text-[14px] font-bold text-red-900">
      {message}
    </p>
  );

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          alert(JSON.stringify(values, null, 2));
          resetForm();
        }}
      >
        <Form className="border-primary-colors mx-auto mt-8 grid h-56 w-[80%] grid-cols-1 grid-rows-[2fr_2fr_1fr] justify-items-center rounded-xl border-8 border-primary-color/40 p-2 font-[Montserrat] text-[14px] md:w-[50%] md:text-[18px] lg:w-[35%]">
          <div className="w-[95%]">
            <label htmlFor="user" className="block">
              Usuario:
            </label>
            <Field
              id="user"
              name="user"
              type="text"
              className="block w-full rounded-sm border-2 border-primary-color/50 px-px"
            />
            <ErrorMessage
              className="text-red-900"
              name="user"
              render={renderError}
            />
          </div>

          <div className="w-[95%]">
            <label className="block" htmlFor="password">
              Contraseña:
            </label>
            <Field
              id="password"
              name="password"
              type="password"
              className="block w-full rounded-sm border-2 border-primary-color/50 px-px"
            />
            <ErrorMessage
              className="text-red-900"
              name="password"
              render={renderError}
            />
          </div>

          <div className="w-[95%]">
            <button
              className="w-full justify-self-stretch rounded-md border-2 border-secondary-color bg-primary-color/90 p-2 text-sm text-white hover:scale-95 hover:border-primary-color hover:bg-secondary-color hover:text-black"
              type="submit"
            >
              Ingresar
            </button>
          </div>
        </Form>
      </Formik>

      {/* <form className="grid flex-row grid-cols-2 p-2 mx-auto mt-8 border-2 h-44 w-64 rounded-2xl font-[Montserrat] border-primary-color">
        <label className="" for="user">
          Usuario:
        </label>
        <input className="self-stretch col-span-2 col-end-3 row-start-2 pl-2 border-2" type="text" id="user" value={user} onChange={userHandleChange} />

        <label className="row-start-3" for="password">
          Contraseña:
        </label>
        <input className="col-span-2 col-end-3 row-start-4 pl-2 border-2" type="password" id="password" value={password} onChange={passHandleChange} />

        <button className="col-span-2 col-start-1 row-start-5 p-2 mt-4 mr-2 text-sm text-white border-2 rounded-md justify-self-stretch border-secondary-color bg-primary-color/90 hover:bg-secondary-color hover:border-primary-color hover:text-black hover:scale-95" onClick={() => this.props.updateProfile(user)}>
          Ingresar
        </button>
      </form> */}
    </>
  );
};

export default Login;
