const edit = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center py-4 gap-3">
            <button className="bg-light-blue text-blue py-1 px-4 rounded-md">Edit</button>
            <button className="bg-red bg-opacity-40 text-red py-1 px-2 rounded-md">Delete</button>
        </div>
    )
}