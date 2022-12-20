import TextInput from "../utils/textinput";
import { useState } from "react";

const AddEventForm = () => {
    const [date, setDate] = useState("");
    const [organisation, setOrganisation] = useState("");
    const [title, setTitle] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [location, setLocation] = useState("")
    const [description, setDescription] = useState("")
    const [link, setLink] = useState("")

    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen w-4/5">
                <h1 className="text-2xl py-3">Add Event</h1>
                <form className="flex flex-col py-4 gap-4 sm:gap-4 w-9/12 sm:w-1/2 max-w-md">
                    <input
                        className="appearance-none block w-full bg-light-blue text-grey rounded py-3 px-4 focus:outline-blue focus:bg-white placeholder:text-grey"
                        id="date"
                        type="date"
                        placeholder="date"
                        value={date}
                        onChange={setDate}
                        required
                    />
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
                    <TextInput
                        id="organisation"
                        value={organisation}
                        onChange={setOrganisation}
                        placeholder="Name of organisation"
                        required
                    />
                    <TextInput
                        id="title"
                        value={title}
                        onChange={setTitle}
                        placeholder="Name of event"
                        required
                    />
                    <TextInput
                        id="location"
                        value={location}
                        onChange={setLocation}
                        placeholder="Location of event"
                        required
                    />
                    <TextInput
                        id="Description"
                        value={description}
                        onChange={setDescription}
                        placeholder="Brief description of event"
                        required
                    />
                    <TextInput
                        id="link"
                        value={link}
                        onChange={setLink}
                        placeholder="https://www.linktoevent.com"
                        required
                    />
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