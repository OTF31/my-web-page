import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

const ActualizarPerfil = (props) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 mt-6 ml-16 mr-16 font-[Montserrat]">
        {props.isOpenSideMenu}
        <input type="text" className="border-2" />
        <input type="text" className="border-2" />
        {props.name}
      </div>
    </>
  );
};

export default ActualizarPerfil;