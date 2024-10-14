import CardDiseñada from "../Components/Card";
import cerdito from "../Assets/Img/cerdito.jpg";
import { useEffect, useState } from "react";
import { DeleteNotas } from "../Services/Notas";

const Home = () => {
  const [usuario, setUsuario] = useState("");
  const [notas, setNotas] = useState({ id_nota: 0, titulo: "Cerdito", detalle: "es pepon", usuario_id: 0 });

  const eliminarNota = async () => {
    try {
      let rsp = await DeleteNotas({ id_nota: notas.id_nota, usuario_id: notas.usuario_id });
      console.log("Eliminado con éxito: ", rsp);
    } catch (error) {
      console.error("Error al eliminar desde la API", error.message);
    }
  };

  useEffect(() => {
    let token = localStorage.getItem("accessToken");
    if (token) {
      setUsuario(token);
    }
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center h-[85vh]">
        <h1 className="text-5xl font-bold m-5">Bienvenido</h1>
        <CardDiseñada
          imagen={cerdito}
          titulo={notas.titulo}
          detalle={notas.detalle}
          onDelete={eliminarNota}
        />
      </div>
    </>
  );
};

export default Home;
