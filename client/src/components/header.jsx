import { Link } from "react-router-dom";

const Header = () => {

    return (
        <>
            <nav className="flex flex-row justify-between items-center py-3 px-6 md:px-12 lg:px-24">
                <p className="font-medium">Shared Calendar</p>
                <Link to="/login">
                    <button className="border rounded-lg py-1 px-3 hover:bg-white hover:text-black">Log In</button>
                </Link>
            </nav>
            <h1 className="text-lg text-center pt-8">A Queer ESEA Events Calendar</h1>
        </>
    )
}

export default Header;