import { useFormik } from "formik";
import * as Yup from 'yup';
import restaurant from "../images/restaurant.jpg";

const BookingForm = () => {
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            resDate: "",
            resTime: "17:00",
            guests: "1",
            occasion: "None",
            location: ""
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validationSchema: Yup.object({
            firstName: Yup.string().min(1, "Please enter your first name.").required("Required"),
            lastName: Yup.string().min(1, "Please enter your last name.").required("Required"),
            email: Yup.string().email("Please enter a valid email address").required("Required"),
            phoneNumber: Yup.string().min(10, "Please include your area code").max(14, "Please enter a valid number in the format xxx-xxx-xxxx.").required("Required"),
            resDate: Yup.date().required("Please pick a date."),
            resTime: Yup
                .mixed()
                .oneOf(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"])
                .required("Required"),
            guests: Yup.number().min(1, "Minimum of 1 guest required").max(10, "We have a maximum table size of 10 guests").required("Required"),
            location: Yup.mixed().oneOf(["Inside","Outside"]).required("Please choose a location")
        }),
    })
    return (
        <form onSubmit={ formik.handleSubmit }>
            <h2>Customer Information</h2>
            <div className="form-wrapper" id="customer-info">
                <div className="form-row">
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        name="firstName"
                        className={ formik.errors.firstName && formik.touched.firstName ? "form-error" : ""}
                        id="firstName"
                        onChange={ formik.handleChange }
                        value={ formik.values.firstName }
                    />
                    { formik.errors.firstName && formik.touched.firstName ? (
                    <div className="form-error-text">{ formik.errors.firstName }</div>
                ) : <div className="form-error-text">&nbsp;</div> }
                </div>
                <div className="form-row">
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        className={ formik.errors.lastName && formik.touched.lastName ? "form-error" : ""}
                        onChange={ formik.handleChange }
                        value={ formik.values.lastName }
                    />
                    { formik.errors.lastName && formik.touched.lastName ? (
                        <div className="form-error-text">{ formik.errors.lastName }</div>
                        ) : <div className="form-error-text">&nbsp;</div> }
                </div>
                <div className="form-row">
                    <label htmlFor="email">Email Address:</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className={ formik.errors.email && formik.touched.email ? "form-error" : ""}
                        onChange={ formik.handleChange }
                        value={ formik.values.email }
                    />
                    { formik.errors.email && formik.touched.email ? (
                        <div className="form-error-text">{ formik.errors.email }</div>
                        ) : <div className="form-error-text">&nbsp;</div> }
                </div>
                <div className="form-row">
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input
                        type="text"
                        name="phoneNumber"
                        id="phoneNumber"
                        className={ formik.errors.phoneNumber && formik.touched.phoneNumber ? "form-error" : ""}
                        onChange={ formik.handleChange }
                        value={ formik.values.phoneNumber }
                    />
                    { formik.errors.phoneNumber && formik.touched.phoneNumber ? (
                         <div className="form-error-text">{ formik.errors.phoneNumber }</div>
                         ) : <div className="form-error-text">&nbsp;</div> }
                </div>
            </div>
            <h2>Dining Information</h2>
            <div id="diner-section">
                <div className="form-wrapper" id="diner-info">
                    <div className="form-row">
                        <label htmlFor="resDate">Choose date:</label>
                        <input
                            type="date"
                            id="resDate"
                            onChange={ formik.handleChange }
                            value={ formik.values.resDate }
                        />
                        { formik.errors.resDate && formik.touched.resDate ? (
                            <span>{ formik.errors.resDate }</span>
                        ) : null }
                    </div>
                    <label htmlFor="resTime">Choose time:</label>
                    <select
                    id="resTime"
                    name="resTime"
                    onChange={ formik.handleChange }
                    value={ formik.values.resTime }>
                        <option value="17:00">17:00</option>
                        <option value="18:00">18:00</option>
                        <option value="19:00">19:00</option>
                        <option value="20:00">20:00</option>
                        <option value="21:00">21:00</option>
                        <option value="22:00">22:00</option>
                    </select>
                    { formik.errors.resTime && formik.touched.resTime ? (
                        <span>{ formik.errors.resTime }</span>
                    ) : null }
                    <label htmlFor="guests">Number of guests</label>
                    <input
                        type="number"
                        placeholder="1"
                        id="guests"
                        onChange={ formik.handleChange}
                        value={ formik.values.guests }
                    />
                    { formik.errors.guests && formik.touched.guests ? (
                        <span>{ formik.errors.guests }</span>
                    ) : null }
                    <label htmlFor="occasion">Occasion</label>
                    <select
                        id="occasion"
                        name="occasion"
                        onChange={ formik.handleChange }
                        value={ formik.values.occasion }
                        >
                            <option value="None">None</option>
                            <option value="Birthday">Birthday</option>
                            <option value="Anniversary">Anniversary</option>
                    </select>
                    <p>Location:</p>
                    <div className="radio-group">
                        <label htmlFor="inside">Inside:</label>
                        <input
                            type="radio"
                            id="inside"
                            name="location"
                            value="Inside"
                            onChange={ formik.handleChange }
                        />
                        <label htmlFor="outside">Outside:</label>
                        <input
                            type="radio"
                            id="outside"
                            name="location"
                            value="Outside"
                            onChange={ formik.handleChange }
                        />
                        { formik.errors.location && formik.touched.location ? (
                            <span>{ formik.errors.location }</span>
                        ) : null }
                    </div>
                </div>
                <img src={ restaurant } alt="Restaurant" />
            </div>
            <button className="btn-default" type="submit">Reserve Me!</button>
        </form>
    );
};

export default BookingForm;