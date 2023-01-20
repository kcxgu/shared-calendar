import { useState } from "react";
import axios from "axios";
import TextInput from "../utils/textinput";

const AddEventForm = ({ currentUser }) => {

    const [date, setDate] = useState("");
    const [title, setTitle] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [link, setLink] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const eventInfo = {
        date: date,
        start: startTime,
        end: endTime,
        organisation: currentUser,
        event: title,
        location: location,
        description: description,
        link: link
    }

    console.log(eventInfo);
    console.log(errorMessage);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (date && startTime && endTime && title && location && description && link) {
            const res = await axios.post(process.env.REACT_APP_SUBMIT, eventInfo);
            setErrorMessage(res.data.message);
            if (res.data.message === "Success!") {
            }
            setErrorMessage("Your event has been added!");
        } else {
            setErrorMessage("Ensure all fields are completed before submission");
        }
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-2xl mt-8">Hi there, {currentUser}</h1>
                <h1 className="text-2xl py-3">We're very excited for your next event!</h1>
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
                            onChange={(e) => setDate(e.target.value)}
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
                            onChange={(e) => setStartTime(e.target.value)}
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
                            onChange={(e) => setEndTime(e.target.value)}
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
                            onChange={(e) => setTitle(e.target.value)}
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
                            onChange={(e) => setLocation(e.target.value)}
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
                            onChange={(e) => setDescription(e.target.value)}
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
                            onChange={(e) => setLink(e.target.value)}
                            placeholder="https://www.queerevent.com"
                            required
                        />
                    </div>
                    <button
                        className="w-fit bg-black text-white rounded py-2 px-4 mt-5 place-self-center"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                    <p className="text-red-500 text-center">{errorMessage}</p>
                </form>
            </div>
        </>
    )
}

export default AddEventForm;