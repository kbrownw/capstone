import BookingHeader from "./BookingHeader";
import BookingForm from "./BookingForm";
import { useReducer, useState, useEffect } from "react";
import dateTimes from "../utils/times.json";

const allTimes = ["13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

export const updateTimes = (availableTimes, action) => {
    switch (action.type) {
        case 'updated_times': {
            const selectedDay = action.date.substr(8,9);
            const newTimes = dateTimes.day[selectedDay];
            return newTimes;
        };
    };
};

export const initializeTimes = () => {
    return allTimes;
};

const BookingPage = ({ onSubmit }) => {
    const [availableTimes, dispatch] = useReducer(
        updateTimes,
        initializeTimes()
    );
    return (
        <>
            <BookingHeader />
            <BookingForm bookingTimes={ availableTimes } updateTimes={ dispatch } onSubmit={ onSubmit }/>
        </>
    );
};

export default BookingPage;