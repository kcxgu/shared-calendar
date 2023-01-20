const TextInput = ({ id, placeholder, value, onChange }) => {

    return (
        <input
            className="appearance-none block w-full bg-light-blue text-grey rounded py-3 px-4 focus:outline-blue focus:bg-white placeholder:text-grey"
            id={id}
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required
        />
    )

}

export default TextInput;