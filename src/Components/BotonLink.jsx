import { Link } from "react-router-dom"

const BotonLink = (props) => {
    return (
        <button className="hover:underline md:text-base p-3 mx-5 font-semibold text-white">
            <Link to={props.url}>
                {props.text}
            </Link>
        </button>
    )
}


export default BotonLink;