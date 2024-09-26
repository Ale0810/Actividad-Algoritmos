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
      catch (error) {
        console.error("Error decodeando", token);
      }
    }
  }, []);

  return (
    <>
      <div className="flex flex-col max-h-full  bg-forbody ">
        <div className="flex flex-col fixed w-[100vw]">
          <Nav />
        </div>
        {props.children}
        <div className="flex flex-col w-[100vw] h-[100vh]">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Frontend;
