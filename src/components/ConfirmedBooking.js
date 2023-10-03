import ConfirimationHeader from "./ConfirmationHeader";
import ConfirmationBody from "./ConfirmationBody";
import { useEffect } from "react";

const ConfirmedBooking = () => {
    useEffect(() => {
        window.scrollTo(0,0);
    },[])
    return (
        <>
            <ConfirimationHeader />
            <ConfirmationBody />
        </>
    )
}

export default ConfirmedBooking;