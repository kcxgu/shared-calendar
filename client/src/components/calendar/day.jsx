import dayjs from "dayjs"

const Day = ({ day, rowIdx }) => {
    function getCurrentDayClass() {
        return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
            ? "bg-blue text-white rounded-full w-7"
            : ""
    }

    return (
        <>
            <div className="flex flex-col text-center">
                <div className="mb-2">
                    {rowIdx === 0 && (
                        <p className="text-sm mt-1 font-medium">
                            {day.format("ddd").toUpperCase()}
                        </p>
                    )}
                </div>
                <div className="border-t border-gray-200 text-center flex flex-col">
                    <div className="flex flex-col">
                        <header className="flex flex-col items-center">
                            <p
                                className={`text-sm p-1 my-1 text-center  ${getCurrentDayClass()}`}
                            >
                                {day.format("DD")}
                            </p>
                        </header>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Day