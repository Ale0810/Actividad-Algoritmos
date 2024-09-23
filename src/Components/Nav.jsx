import BotonLink from "./BotonLink";
import Boton from "./Boton";
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useState } from "react";

const cerrarSesion = () => {
    localStorage.clear();
    window.location.replace("/");
};

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);


    const Hamburguesa = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <>
            <div className="flex bg-navy flex-col md:flex-row w-full p-2 justify-evenly border border-black">
                <div className="flex flex-grow items-center">
                    <Boton callback={cerrarSesion} text={<HomeSharpIcon fontSize="medium" />} />
                    <div className="ml-2 md:hidden">
                        <Boton callback={Hamburguesa} text={<MenuOutlinedIcon fontSize="medium" />} />
                    </div>
                </div>
                <div className={`flex flex-col md:hidden ${menuOpen ? 'block' : 'hidden'}`}>
                    <BotonLink url={"https://www.youtube.com/"} text={"Youtube"} />
                    <BotonLink url={"https://tidal.com/"} text={"Tidal"} />
                    <BotonLink url={"https://open.spotify.com/intl-es"} text={"Spotify"} />
                </div>
                <div className="hidden md:flex">
                    <BotonLink url={"https://www.youtube.com/"} text={"Youtube"} />
                    <BotonLink url={"https://tidal.com/"} text={"Tidal"} />
                    <BotonLink url={"https://open.spotify.com/intl-es"} text={"Spotify"} />
                </div>
            </div>
        </>
    )
}

export default Nav;