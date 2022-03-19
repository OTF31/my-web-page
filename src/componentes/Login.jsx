import { useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";


const Login = (props) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const userHandleChange = e => {
    setUser(e.target.value);
  }

  const changeUservalue = (value, setFieldValue) => {
    setFieldValue("user", value);
  }

  const passHandleChange = e => {
    setPassword(e.target.value);
  }

  // Esquema
  const validationSchema = Yup.object({
    user: Yup.string().required("Por favor ingresa usuario"),
    password: Yup.string().required("Contraseña requerida").min(4, "La contraseña debe de ser más de 4 caracteres"),
  });

  // Valores iniciales
  const initialValues = {
    user: "",
    password: "",
  }

  const onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2)); // Convertir objeto de JS a JSON
  };

  const renderError = (message) => <p className="text-red-900 font-bold mt-2">{message}</p>;

  // const submitHandle = e => {
  //   e.preventDefault();
  // }

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, { resetForm }) => {
          alert(user);
          await onSubmit(values);
          resetForm();
        }}
      >

        <Form className="">
          <div className="grid grid-cols-1 p-2 mx-auto mt-8 border-8 h-60 w-1/4 rounded-2xl font-[Montserrat] border-primary-colors">
            <label className="" for="user">
              Usuario:
            </label>

            {/* <input name="user" className="pl-2 border-2" type="text" id="user" value={user} onChange={userHandleChange} /> */}
            <Field name="user" type="text" className="pl-2 border-2" value={user} onChange={e => userHandleChange(e)} />
            <ErrorMessage className="text-red-900" name="user" render={renderError} />

            <label className="mt-4" for="password">
              Contraseña:
            </label>

            {/* <input className="pl-2 border-2" type="password" id="password" value={password} onChange={passHandleChange} /> */}
            <Field name="password" type="password" s className="pl-2 border-2" />
            <ErrorMessage className="text-red-900" name="password" render={renderError} />

            <button className="p-2 mt-4 mr-2 text-sm text-white border-2 rounded-md justify-self-stretch border-secondary-color bg-primary-color/90 hover:bg-secondary-color hover:border-primary-color hover:text-black hover:scale-95" type="submit">
              Ingresar
            </button>
          </div>
        </Form>
      </Formik>

      {/* <form className="grid flex-row grid-cols-2 p-2 mx-auto mt-8 border-2 h-44 w-64 rounded-2xl font-[Montserrat] border-primary-color">
        <label className="" for="user">
          Usuario:
        </label>
        <input className="pl-2 border-2 self-stretch row-start-2 col-end-3 col-span-2" type="text" id="user" value={user} onChange={userHandleChange} />

        <label className="row-start-3" for="password">
          Contraseña:
        </label>
        <input className="pl-2 border-2 row-start-4 col-end-3 col-span-2" type="password" id="password" value={password} onChange={passHandleChange} />

        <button className="col-span-2 col-start-1 row-start-5 p-2 mt-4 mr-2 text-sm text-white border-2 rounded-md justify-self-stretch border-secondary-color bg-primary-color/90 hover:bg-secondary-color hover:border-primary-color hover:text-black hover:scale-95" onClick={() => this.props.updateProfile(user)}>
          Ingresar
        </button>
      </form> */}
    </>
  )
}

export default Login;