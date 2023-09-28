import BookingHeader from "./BookingHeader";
import BookingForm from "./BookingForm";
import { useState } from "react";

const allTimes = ["13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

const BookingPage = () => {

    const [availableTimes, setAvailableTimes] = useState(allTimes);

    return (
        <>
            <BookingHeader />
            <BookingForm bookingTimes={ availableTimes } />
        </>
    );
};

export default BookingPage;