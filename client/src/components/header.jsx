import { Link } from "react-router-dom";

const Header = () => {

    return (
        <>
            <nav className="flex flex-row justify-between items-center py-6 px-6 md:px-12 lg:px-24">
                <p className="text-xl">Shared Calendar</p>
                <Link to="/login">
                    <button className="bg-purple text-white rounded-lg py-1.5 px-3.5 hover:opacity-70">Log In</button>
                </Link>
            </nav>
            <h1 className="text-lg text-center pt-8">A Queer ESEA Events Calendar</h1>
        </>
    )
}

export default Header;