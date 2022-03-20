import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

const ActualizarPerfil = (props) => {
  // Esquema
  const validationSchema = Yup.object({
    nombres: Yup.string().required("Requerido"),
    apellidos: Yup.string().required("Requerido"),
    telefono: Yup.string().length(9, "Debe ser 9 dígitos").required("Requerido"),
    direccion: Yup.string(),
    email: Yup.string().email("Debe ser un email válido").required("Requerido"),
    fechaDeNacimiento: Yup.date().required("Requerido"),
  });

  // Valores iniciales
  const initialValues = {
    user: "",
    password: "",
  }

  const renderError = (message) => <p className="absolute text-[15px] font-bold text-red-700">{message}</p>;

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
        <Form className="grid grid-cols-1 gap-2 mt-6 mr-2 font-[Montserrat] md:grid-cols-2 md:gap-4 place-items-center lg:grid-cols-3 lg:gap-6 md:text-base lg:text-xl text-sm">
          <div className="mb-[10px]">
            <label htmlFor="nombres" className="block">Nombres:</label>
            <Field id="nombres" name="nombres" className="block w-9/12 px-px border-2 border-secondary-color ring-primary-color ring-2" />
            <ErrorMessage name="nombres" render={renderError} />
          </div>

          <div className="mb-[10px]">
            <label htmlFor="apellidos" className="block">Apellidos:</label>
            <Field id="apellidos" name="apellidos" className="block w-9/12 px-px border-2 border-secondary-color ring-primary-color ring-2" />
            <ErrorMessage name="apellidos" render={renderError} />
          </div>

          <div className="mb-[10px]">
            <label htmlFor="telefono" className="block">Teléfono:</label>
            <Field id="telefono" name="telefono" className="block w-9/12 px-px border-2 border-secondary-color ring-primary-color ring-2" />
            <ErrorMessage name="telefono" render={renderError} />
          </div>

          <div className="mb-[10px]">
            <label htmlFor="direccion" className="block">Dirección:</label>
            <Field id="direccion" name="direccion" className="block w-9/12 px-px border-2 border-secondary-color ring-primary-color ring-2" />
            <ErrorMessage name="direccion" render={renderError} />
          </div>

          <div className="mb-[10px]">
            <label htmlFor="email" className="block">E-mail:</label>
            <Field id="email" name="email" className="block w-9/12 px-px border-2 border-secondary-color ring-primary-color ring-2" />
            <ErrorMessage name="email" render={renderError} />
          </div>

          <div className="mb-[10px]">
            <label htmlFor="fechaNacimiento" className="block">Fecha:</label>
            <Field type="date" id="fechaNacimiento" name="fechaNacimiento" className="block w-9/12 px-px border-2 border-secondary-color ring-primary-color ring-2" />
            <ErrorMessage name="fechaNacimiento" render={renderError} />
          </div>

          <button className="p-1 rounded-[15%] mt-4 border-2 lg:col-span-3 md:col-span-2 border-primary-color hover:scale-[107%]" type="submit">
            Actualizar
          </button>
        </Form>
      </Formik>

      {/* <div className="grid grid-cols-1 gap-2 mt-6 mr-2 font-[Montserrat] md:grid-cols-2 md:gap-4 place-items-center lg:grid-cols-3 lg:gap-6 md:text-base lg:text-xl text-sm">
        <div className="">
          <label htmlFor="nombres" className="block">Nombres:</label>
          <input type="text" id="nombres" className="block w-9/12 border-2" />
        </div>

        <div className="">
          <label htmlFor="apellidos" className="block">Apellidos:</label>
          <input type="text" id="apellidos" className="block w-9/12 border-2" />
        </div>

        <div className="">
          <label htmlFor="telefono" className="block">Teléfono:</label>
          <input type="text" id="telefono" className="block w-9/12 border-2" />
        </div>

        <div className="">
          <label htmlFor="direccion" className="block">Dirección:</label>
          <input type="text" id="direccion" className="block w-9/12 border-2" />
        </div>

        <div className="">
          <label htmlFor="email" className="block">E-mail:</label>
          <input type="text" id="email" className="block w-9/12 border-2" />
        </div>

        <div>
          <label htmlFor="fechaNacimiento" className="block">Fecha de nacimiento:</label>
          <input type="date" id="fechaNacimiento" className="block w-11/12 border-2" />
        </div>

        <button className="mt-4 lg:col-span-3 md:col-span-2">
          Actualizar
        </button>
      </div> */}
    </>
  );
};

export default ActualizarPerfil;