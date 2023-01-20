import { getMonth } from "../utils/dates";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import CalendarHeader from "../components/calendar/calendarHeader";
import Month from "../components/calendar/month";
import GlobalContext from "../context/globalContext";
import Header from "../components/header"
import Footer from "../components/footer";
// import Upcoming from "../components/upcoming";

const Events = ({ currentUser }) => {
    const [currentMonth, setCurrentMonth] = useState(getMonth())
    const { monthIndex } = useContext(GlobalContext)

    useEffect(() => {
        setCurrentMonth(getMonth(monthIndex))
    }, [monthIndex])

    return (
        <>
            <nav className="flex flex-row justify-between items-center border-b py-6 px-6 md:px-12 lg:px-18">
                <Link to="/">
                    <p className="text-xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-red to-violet-500 hover:opacity-70">Shared Calendar</p>
                </Link>
                {currentUser ?
                    <Link to="/member-area">
                        <button className="bg-black text-white font-bold rounded-lg py-1.5 px-3.5 hover:opacity-70">Add Event</button>
                    </Link>
                    :
                    <>
                        <Link to="/member-area">
                            <button className="bg-purple text-white font-bold rounded-lg py-1.5 px-3.5 hover:opacity-70">Log In</button>
                        </Link>
                    </>
                }
            </nav>

            <h1 className="pt-8 text-lg font-bold text-center">A Queer ESEA Events Calendar</h1>
            <div className="flex flex-col items-center">
                {/* <h1 className="text-center pt-5 pb-1 font-medium">Upcoming Events:</h1> */}
                {/* <Upcoming /> */}
                <div className="h-screen flex flex-col w-full max-w-7xl sm:pr-12 lg:pr-24">
                    <CalendarHeader />
                    <Month month={currentMonth} />
                </div>
            </div>
            {/* <Footer /> */}
        </>
    )
}

export default Events;