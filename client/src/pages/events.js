import { getMonth } from "../utils/dates";
import { useState, useContext } from "react";
import CalendarHeader from "../components/calendar/calendarHeader";
import Month from "../components/calendar/month";
import GlobalContext from "../context/globalContext";
import { useEffect } from "react";
import Header from "../components/header"
import Footer from "../components/footer";
// import Upcoming from "../components/upcoming";

const Events = () => {
    const [currentMonth, setCurrentMonth] = useState(getMonth())
    const { monthIndex } = useContext(GlobalContext)

    useEffect(() => {
        setCurrentMonth(getMonth(monthIndex))
    }, [monthIndex])

    return (
        <>
            <Header />
            <h1 className="pt-8 text-lg font-bold text-center">A Queer ESEA Events Calendar</h1>
            <div className="flex flex-col items-center">
                {/* <h1 className="text-center pt-5 pb-1 font-medium">Upcoming Events:</h1> */}
                {/* <Upcoming /> */}
                <div className="h-screen flex flex-col w-full max-w-7xl sm:pr-12 lg:pr-24">
                    <CalendarHeader />
                    <Month month={currentMonth} />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Events;