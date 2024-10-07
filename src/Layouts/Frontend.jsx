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
        let tokenDecoded = JSON.stringify(jwtDecode(token));
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
      <div className="flex flex-col min-h-screen  bg-forbody ">
        <div className="w-full">
          <Nav />
        </div>
        <main className="flex-grow">
          {props.children}
        </main>
      </div>
    </>
  );
};

export default Frontend;
