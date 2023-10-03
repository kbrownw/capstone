import SubmitAPI from "../hooks/submitAPI";
import { useNavigate } from "react-router-dom";

export const useSubmitForm = () => {
    const {isLoading, submit} = SubmitAPI();
    const navigate = useNavigate();
    const submitToAPI = async (data)  => {
        const response = await submit(data);
        if (response) {
            console.log(response);
            navigate("/confirmation");
        } else {
            console.log(response)
        }
    }
    return {isLoading, submitToAPI}
}