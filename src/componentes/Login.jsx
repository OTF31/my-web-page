import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";


const Login = (props) => {
  // Esquema
  const validationSchema = Yup.object({
    user: Yup.string().required("Usuario requerido"),
    password: Yup.string().required("Contraseña requerida").min(4, "Debe de tener al menos 4 caracteres"),
  });

  // Valores iniciales
  const initialValues = {
    user: "",
    password: "",
  }

  const renderError = (message) => <p className="absolute text-[14px] mt-2 font-bold text-red-900">{message}</p>;

  // const submitHandle = e => {
  //   e.preventDefault();
  // }

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
        <Form className="grid grid-cols-1 grid-rows-[2fr_2fr_1fr] p-2 border-8 mx-auto mt-8 h-56 w-1/4 border-primary-color/40 rounded-xl font-[Montserrat] border-primary-colors justify-items-center">
          <div className="w-[95%]">
            <label htmlFor="user">Usuario:</label>
            <Field id="user" name="user" className="w-full px-px border-2 rounded-sm border-primary-color/50" />
            <ErrorMessage className="text-red-900" name="user" render={renderError} />
          </div>

          <div className="w-[95%]">
            <label className="w-[95%]" htmlFor="password">Contraseña:</label>
            <Field id="password" name="password" type="password" className="w-full px-px border-2 rounded-sm border-primary-color/50" />
            <ErrorMessage className="text-red-900" name="password" render={renderError} />
          </div>

          <div className="w-[95%]">
            <button className="w-full p-2 text-sm text-white border-2 rounded-md justify-self-stretch border-secondary-color bg-primary-color/90 hover:bg-secondary-color hover:border-primary-color hover:text-black hover:scale-95" type="submit">
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
  )
}

export default Login;