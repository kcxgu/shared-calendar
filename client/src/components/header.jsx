import { Link } from "react-router-dom";

const Header = () => {

    return (
        <>
            <nav className="flex flex-row justify-between items-center border-b py-6 px-6 md:px-12 lg:px-18">
                <Link to="/">
                    <p className="text-xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-red to-violet-500 hover:opacity-70">Shared Calendar</p>
                </Link>
                {window.location.pathname === "/" ?
                    <Link to="/login">
                        <button className="bg-purple text-white font-bold rounded-lg py-1.5 px-3.5 hover:opacity-70">Log In</button>
                    </Link>
                    :
                    <h1 className="text-lg font-bold text-center">A Queer ESEA Events Calendar</h1>}
            </nav>

        </>
    )
}

export default Header;