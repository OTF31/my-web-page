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
    fecha: Yup.date().required("Requerido"),
  });

  // Valores iniciales
  const initialValues = {
    nombres: props.datosPerfil["nombres"],
    apellidos: props.datosPerfil["apellidos"],
    telefono: props.datosPerfil["telefono"],
    direccion: props.datosPerfil["direccion"],
    email: props.datosPerfil["email"],
    fecha: props.datosPerfil["fecha"],
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
          <div className="mb-[10px] w-[80%]">
            <label htmlFor="nombres" className="block">Nombres:</label>
            <Field id="nombres" name="nombres" className="block w-full pl-[3px] border-2 border-secondary-color focus:border-primary-color focus:border-[2px] focus:ring-4 focus:ring-primary-color/70 shadow-lg focus:shadow-secondary-color/50" />
            <ErrorMessage name="nombres" render={renderError} />
          </div>

          <div className="mb-[10px] w-[80%]">
            <label htmlFor="apellidos" className="block">Apellidos:</label>
            <Field id="apellidos" name="apellidos" className="block w-full pl-[3px] border-2 border-secondary-color focus:border-primary-color focus:border-[2px] focus:ring-4 focus:ring-primary-color/70 shadow-lg focus:shadow-secondary-color/50" />
            <ErrorMessage name="apellidos" render={renderError} />
          </div>

          <div className="mb-[10px] w-[80%]">
            <label htmlFor="telefono" className="block">Teléfono:</label>
            <Field id="telefono" name="telefono" className="block w-full pl-[3px] border-2 border-secondary-color focus:border-primary-color focus:border-[2px] focus:ring-4 focus:ring-primary-color/70 shadow-lg focus:shadow-secondary-color/50" />
            <ErrorMessage name="telefono" render={renderError} />
          </div>

          <div className="mb-[10px] w-[80%]">
            <label htmlFor="direccion" className="block">Dirección:</label>
            <Field id="direccion" name="direccion" className="block w-full pl-[3px] border-2 border-secondary-color focus:border-primary-color focus:border-[2px] focus:ring-4 focus:ring-primary-color/70 shadow-lg focus:shadow-secondary-color/50" />
            <ErrorMessage name="direccion" render={renderError} />
          </div>

          <div className="mb-[10px] w-[80%]">
            <label htmlFor="email" className="block">E-mail:</label>
            <Field id="email" name="email" className="block w-full pl-[3px] border-2 border-secondary-color focus:border-primary-color focus:border-[2px] focus:ring-4 focus:ring-primary-color/70 shadow-lg focus:shadow-secondary-color/50" />
            <ErrorMessage name="email" render={renderError} />
          </div>

          <div className="mb-[10px] w-[80%]">
            <label htmlFor="fecha" className="block">Fecha:</label>
            <Field type="date" id="fecha" name="fecha" className="block w-full pl-[3px] border-2 border-secondary-color focus:border-primary-color focus:border-[2px] focus:ring-4 focus:ring-primary-color/70 shadow-lg focus:shadow-secondary-color/50" />
            <ErrorMessage name="fecha" render={renderError} />
          </div>

          <button className="self-center p-1 rounded-[15%] border-2 lg:col-span-3 md:col-span-2 border-primary-color hover:scale-[107%]" type="submit">
            Actualizar
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default ActualizarPerfil;