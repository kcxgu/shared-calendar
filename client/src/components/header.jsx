import { Link } from "react-router-dom";

const Header = ({ currentUser, loggedIn }) => {

    const handleLogOut = () => {
        window.localStorage.removeItem("currentUser")
        window.location.reload();
    }

    return (
        <>
            <nav className="flex flex-row justify-between items-center border-b py-6 px-6 md:px-12 lg:px-18">
                <Link to="/">
                    <p className="text-xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-red to-violet-500 hover:opacity-70">Shared Calendar</p>
                </Link>
                {currentUser ?
                    <button className="bg-grey text-white font-bold rounded-lg py-1.5 px-3.5 hover:opacity-70" onClick={handleLogOut}>Log Out</button>
                    :
                    <>
                        <Link to="/member-area">
                            <button className="bg-purple text-white font-bold rounded-lg py-1.5 px-3.5 hover:opacity-70">Log In</button>
                        </Link>
                    </>
                }
            </nav>

        </>
    )
}

export default Header;