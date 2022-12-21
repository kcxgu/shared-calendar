import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Footer from "../components/footer";

const LogIn = () => {
    const navigate = useNavigate();
    const [organisation, setOrganisation] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const handleLogIn = async (e) => {
        e.preventDefault();

        const user = { organisation, password }

        if (organisation && password) {
            const res = await axios.post('http://localhost:4000/login', user);
            setErrorMessage(res.data.message);
            if (res.data.message === "Success!") {
                navigate("/add-event");
            }
            return
        } else {
            setErrorMessage("Invalid input, try again.")
        }

        setErrorMessage("")
    }

    return (
        <>
            {/* To add Header with condition rendering of certain elements */}
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-2xl font-medium py-3">Log In</h1>
                <p className="text-grey text-center w-1/2 md:w-2/6 lg:w-1/6 py-1">Only organisational members have access to edit the events page</p>
                <p className="text-center text-blue mb-4">Request access</p>
                <form className="flex flex-col py-4 gap-4">
                    <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold"
                        htmlFor="organisation"
                    >
                        Organisation
                    </label>
                    <select
                        className="w-full bg-light-blue text-black rounded py-3 px-4 focus:outline-blue focus:bg-white focus:border-gray-500 placeholder:text-grey active:text-black"
                        onChange={(e) => { setOrganisation(e.target.value) }}
                        required
                    >
                        <option>Select</option>
                        <option value="BAQC ESEA">BAQC ESEA</option>
                        <option value="Queer China UK">Queer China UK</option>
                        <option value="Pink Dot Ldn">Pink Dot Ldn</option>
                    </select>
                    <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold"
                        htmlFor="password"
                    >
                        Password
                    </label>
                    <input
                        className="appearance-none block w-full bg-light-blue text-black rounded py-3 px-4 focus:outline-blue focus:bg-white focus:border-gray-500 placeholder:text-grey"
                        id="password"
                        type="password"
                        placeholder="Password"
                        onChange={(e) => { setPassword(e.target.value) }}
                        required
                    />
                    <button
                        className="w-fit bg-black text-white rounded py-2 px-4 mt-5 place-self-center"
                        onClick={handleLogIn}
                    >
                        Log in
                    </button>
                    <p className="text-red text-center">{errorMessage}</p>
                    <p className="text-grey text-center">Forgot password?</p>
                </form>
            </div>
            <Footer />
        </>
    )

}

export default LogIn;