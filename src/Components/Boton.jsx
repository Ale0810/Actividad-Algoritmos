const Boton = (props) =>{
    
    return(
        <button onClick={props.callback} className="font-semibold md:text-base bg-white rounded-lg p-2 hover:bg-slate-200">
            {props.text}
        </button>
    )
}

export default Boton;