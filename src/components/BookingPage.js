import BookingHeader from "./BookingHeader";
import BookingForm from "./BookingForm";
import { useReducer, useState, useEffect } from "react";

const allTimes = ["13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

const timesReducer = (availableTimes, action) => {
    switch (action.type) {
        case 'updated_times': {
            const newTimes = allTimes.filter(() => {
                let randomNumber = Math.random();
                return randomNumber > 0.5;
            });
            return newTimes;
        };
    };
};

export const initializeTimes = () => {
    return allTimes;
};

const BookingPage = () => {

    const [availableTimes, dispatch] = useReducer(
        timesReducer,
        initializeTimes()
    );

    return (
        <>
            <BookingHeader />
            <BookingForm bookingTimes={ availableTimes } updateTimes={ dispatch }/>
        </>
    );
};

export default BookingPage;