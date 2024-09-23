import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import { useEffect, useState } from "react";

let Direcciones = [];

if (localStorage.getItem("userdata")) {
  Direcciones = [
    {
      to: "/home",
      text: "Home",
    }
  ];
}

const Frontend = (props) => {
  const [userData, setUserData] = useState(false);

  useEffect(() => {
    let tmp = localStorage.getItem("userdata");

    if (tmp) {
      setUserData(JSON.parse(tmp));
    }
  }, []);

  return (
    <>
      <div className="min-h-screen  bg-forbody ">
        <Nav />
        {props.children}
        <Footer />
      </div>
    </>
  );
};

export default Frontend;
