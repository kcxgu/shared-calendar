import TextInput from "../utils/textinput";
import { useState } from "react";

const AddEventForm = ({ organisation }) => {
    const [date, setDate] = useState("");
    // const [organisation, setOrganisation] = useState("");
    const [title, setTitle] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [location, setLocation] = useState("")
    const [description, setDescription] = useState("")
    const [link, setLink] = useState("")

    const eventInfo = {
        date: date,
        start: startTime,
        end: endTime,
        organisation: organisation,
        event: title,
        location: location,
        description: description,
        link: link
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-2xl py-3">Add Event</h1>
                <form className="flex flex-col py-4 gap-4 sm:gap-4 w-9/12 sm:w-1/2 max-w-md">
                    <div>
                        <label
                            className="text-grey"
                            htmlFor="date"
                        >
                            Date of Event
                        </label>
                        <input
                            className="appearance-none block w-full bg-light-blue text-grey rounded py-3 px-4 focus:outline-blue focus:bg-white placeholder:text-grey"
                            id="date"
                            type="date"
                            placeholder="date"
                            value={date}
                            onChange={setDate}
                            required
                        />
                    </div>
                    <div>
                        <label
                            className="text-grey"
                            htmlFor="start-time"
                        >
                            Start time
                        </label>
                        <input
                            className="appearance-none block w-full bg-light-blue text-grey rounded py-3 px-4 focus:outline-blue focus:bg-white placeholder:text-grey"
                            id="start-time"
                            type="time"
                            placeholder="start time"
                            value={startTime}
                            onChange={setStartTime}
                            required
                        />
                    </div>
                    <div>
                        <label
                            className="text-grey"
                            htmlFor="start-time"
                        >
                            End time
                        </label>
                        <input
                            className="appearance-none block w-full bg-light-blue text-grey rounded py-3 px-4 focus:outline-blue focus:bg-white placeholder:text-grey"
                            id="endt-time"
                            type="time"
                            placeholder="end time"
                            value={endTime}
                            onChange={setEndTime}
                            required
                        />
                    </div>
                    <div>
                        <label
                            className="text-grey"
                            htmlFor="title"
                        >
                            Name of Event
                        </label>
                        <TextInput
                            id="title"
                            value={title}
                            onChange={setTitle}
                            placeholder="A new queer event"
                            required
                        />
                    </div>
                    <div>
                        <label
                            className="text-grey"
                            htmlFor="location"
                        >
                            Location of Event
                        </label>
                        <TextInput
                            id="location"
                            value={location}
                            onChange={setLocation}
                            placeholder="18 Somewhere Queer, London, SW1A 1AA"
                            required
                        />
                    </div>
                    <div>
                        <label
                            className="text-grey"
                            htmlFor="description"
                        >
                            Description of Event
                        </label>
                        <TextInput
                            id="description"
                            value={description}
                            onChange={setDescription}
                            placeholder="Brief but queer description of event"
                            required
                        />
                    </div>
                    <div>
                        <label
                            className="text-grey"
                            htmlFor="link"
                        >
                            Link to Event
                        </label>
                        <TextInput
                            id="link"
                            value={link}
                            onChange={setLink}
                            placeholder="https://www.queerevent.com"
                            required
                        />
                    </div>
                    <button className="w-fit bg-black text-white rounded py-2 px-4 mt-5 place-self-center">
                        Submit
                    </button>
                    <p className="text-grey text-center">Error message</p>
                </form>
            </div>
        </>
    )
}

export default AddEventForm;