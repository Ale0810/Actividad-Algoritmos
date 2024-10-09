import Input from "./Input";
import { useEffect, useState } from "react";
import { PostLogin } from "../Services/Auth";
import Progress from "../Components/Progress"

const Form = () => {
  const [datos, setDatos] = useState({ usuario: "", contrasena: "" });
  const [errores, setErrores] = useState("");
  const [cargando, setCargando] = useState(false);


  const submitLogin = async () => {
    if (!datos.usuario || !datos.contrasena) {
      setErrores("Complete los datos.");
    } else {
      console.log("Datos:", datos);
      try {
        setCargando(true);
        let rsp = await PostLogin(datos);
        console.log("Respuesta:",rsp);
        if (rsp?.accessToken) {
          localStorage.setItem("accessToken", rsp.accessToken);
          window.location.replace("/home");
          setCargando(false);
        } else {
          setErrores("Acceso denegado. Usuario o contraseña incorrectos.");
          setCargando(false);
        }
      } catch (error) {
        setErrores("Error en la autenticación. Intente nuevamente.");
      }
    }
  };

  return (
    <form className="flex bg-grisclarito border justify-center  border-black w-[60vw] h-[50vh] shadow-2xl rounded-lg">
      <div className="flex flex-col gap-5 justify-center items-center">
        <h1 className="text-3xl font-bold mb-5">Iniciar Sesion</h1>
        {errores && <p className="text-red-600">{errores}</p>}
        <Input
          type={"text"}
          placeholder={"Nombre"}
          callback={(e) => {
            setDatos({ ...datos, usuario: e.target.value });
          }}
        />
        <Input
          type={"password"}
          placeholder={"Contraseña"}
          callback={(e) => {
            setDatos({ ...datos, contrasena: e.target.value });
          }}
        />
        <button
          className="bg-sky-500 hover:bg-sky-700 text-white font-semibold rounded-lg p-2 text-lg w-[150px] h-[50px]"
          type="button"
          onClick={submitLogin}
        >
          Acceder
        </button>
        <div className={`flex ${cargando ? "block" : "hidden"} `}>
          <Progress/>
        </div>
      </div>
    </form>
  );
};

export default Form;
