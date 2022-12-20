import { getMonth } from "../utils/dates";
import { useState, useContext } from "react";
import CalendarHeader from "../components/calendar/calendarHeader";
import Month from "../components/calendar/month";
import GlobalContext from "../context/globalContext";
import { useEffect } from "react";
import AddEventForm from "../components/addEventForm";

const AddEvent = () => {
    const [currentMonth, setCurrentMonth] = useState(getMonth())
    const { monthIndex } = useContext(GlobalContext)

    useEffect(() => {
        setCurrentMonth(getMonth(monthIndex))
    }, [monthIndex])

    return (
        <>
            <div className="flex flex-col sm:flex-row items-center justify-between">
                <AddEventForm />
                <div className="h-screen flex flex-col w-full max-w-7xl sm:pr-12 lg:pr-24">
                    <CalendarHeader />
                    <Month month={currentMonth} />
                </div>
            </div>
        </>
    )
}

export default AddEvent;