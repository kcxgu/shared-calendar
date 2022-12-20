const TextInput = ({ id, placeholder, value, inputHandler }) => {

    function handleChange(e) {
        inputHandler(e.target.value);
    };

    return (
        <input
            className="appearance-none block w-full bg-light-blue text-grey rounded py-3 px-4 focus:outline-blue focus:bg-white placeholder:text-grey"
            id={id}
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            required
        />
    )

}

export default TextInput;