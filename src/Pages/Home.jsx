import CardDiseñada from "../Components/Card";
import cerdito from "../Assets/Img/cerdito.jpg"

const Home = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-[85vh]">
        <h1 className="text-5xl font-bold m-5">Bienvenido</h1>
        <CardDiseñada
          imagen={cerdito}
          texto="Cerdito Pepon"
          titulo="Pepo"
          detalle="La pepo"
        />
      </div>
    </>
  );
};

export default Home;
