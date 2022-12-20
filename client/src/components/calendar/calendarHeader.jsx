import { useContext } from "react";
import dayjs from "dayjs";
import GlobalContext from "../../context/globalContext";

const CalendarHeader = () => {
    const { monthIndex, setMonthIndex } = useContext(GlobalContext)

    function handlePrevMonth() {
        setMonthIndex(monthIndex - 1)
    }

    function handleNextMonth() {
        setMonthIndex(monthIndex + 1)
    }

    function handleReset() {
        setMonthIndex(dayjs().month())
    }

    return (
        <header className="px-4 lg:px-6 py-6 flex flex-row items-center justify-between">
            <h1 className="text-xl py-2">Calendar</h1>
            <div className="flex flex-row items-center gap-4 text-sm md:text-lg">
                <button
                    className="bg-blue text-white text-sm rounded py-1 px-2 md:py-2 md:px-4 hover:bg-light-blue hover:text-black"
                    onClick={handleReset}
                >
                    Today
                </button>
                <button onClick={handlePrevMonth}>
                    ←
                </button>
                <h2>
                    {dayjs(new Date(dayjs().year(), monthIndex)).format("MMM YYYY")}
                </h2>
                <button onClick={handleNextMonth}>
                    →
                </button>
            </div>
        </header>
    )
}

export default CalendarHeader;