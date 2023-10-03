import {useState} from "react";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const SubmitAPI = () => {
  const [isLoading, setLoading] = useState(false);
 
  const submit = async (data) => {
    let response = false;
    setLoading(true);
    try {
      await wait(2000);
      response = true;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      return response;
    }
  };

  return { isLoading, submit };
}

export default SubmitAPI;