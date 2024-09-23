const Input = (props) => {
    return (
        <input
            className="outline-none rounded-lg border ring-1 focus:ring-4 shadow-lg text-lg w-[300px] h-[50px] p-2"
            type={props.type}
            placeholder={props.placeholder}
            onChange={props.callback}
            />
    )
}

export default Input;