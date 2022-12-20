// import Details from "../components/details";
import Header from "../components/header"
import Footer from "../components/footer";
import Upcoming from "../components/upcoming";

const Events = () => {
    return (
        <>
            <Header />
            <div className="flex flex-col items-center">
                <h1 className="text-center pt-5 pb-1 font-medium">Upcoming Events:</h1>
                <Upcoming />
                {/* <Details /> */}
            </div>
            <Footer />
        </>
    )
}

export default Events;