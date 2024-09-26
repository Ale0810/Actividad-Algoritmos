import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

let Direcciones = [];

if (localStorage.getItem("accessToken")) {
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
    let token = localStorage.getItem("accessToken");
    if (token) {
      try {
        let tokenDecoded = jwtDecode(token);
        console.log(tokenDecoded);
        setUserData(tokenDecoded);
      }
      catch (error)
      {
        console.error("Error decodeando",token);
      }
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
