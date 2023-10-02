import { useFormik } from "formik";
import * as Yup from 'yup';
import restaurant from "../images/restaurant.jpg";
import { useEffect } from "react";

const BookingForm = ({ bookingTimes, updateTimes, onSubmit }) => {
    const convoBubbles = <>
            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="30" viewBox="0 0 29 30" fill="none">
                <path d="M8.27188 29.4152C12.3544 29.4152 15.6639 25.9727 15.6639 21.7261C15.6639 17.4794 12.3544 14.0369 8.27188 14.0369C4.18939 14.0369 0.879883 17.4794 0.879883 21.7261C0.879883 23.1266 1.23985 24.4396 1.8688 25.5706L1.24948 29.0308L4.57588 28.3866C5.66315 29.0408 6.92548 29.4152 8.27188 29.4152Z" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18.7315 23.6803C20.0437 23.4603 21.2762 22.9934 22.384 22.3268L27.2224 23.2639L26.3215 18.231C27.2363 16.5859 27.76 14.6759 27.76 12.6389C27.76 6.46196 22.9462 1.45459 17.008 1.45459C11.5952 1.45459 7.11655 5.61511 6.36646 11.0295" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </>
    const times = bookingTimes.map((time) => {
        let noQuotesTime = time.replace(/[""]+/g, '');
        return (
            <option key={ time } value={ time }>{ noQuotesTime }</option>
        )
    })

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            resDate: "",
            resTime: bookingTimes[0],
            guests: 1,
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
                .oneOf(bookingTimes)
                .default(),
            guests: Yup.number().min(1, "Minimum of 1 guest required").max(10, "We have a maximum table size of 10 guests").required("Required"),
            location: Yup.mixed().oneOf(["Inside","Outside"]).required("Please choose a location")
        }),
    })

    const handleSubmit = (e) => {
        if (onSubmit) {
            onSubmit([formik.values.firstName, formik.values.lastName, formik.values.email, formik.values.phoneNumber, formik.values.resDate, formik.values.resTime, formik.values.guests, formik.values.occasion, formik.values.location]);
        }
        formik.handleSubmit(e);
    }

    useEffect(()=> {
        formik.setFieldValue('resTime', bookingTimes[0]);
        // eslint-disable-next-line
    },[bookingTimes]);

    return (
        <form onSubmit={ handleSubmit }>
            <h2>Customer Information</h2>
            <div className="form-wrapper" id="customer-info">
                <div className="form-row">
                    <label htmlFor="firstName">First Name:</label>
                    <div className="form-column">
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
                </div>
                <div className="form-row">
                    <label htmlFor="lastName">Last Name:</label>
                    <div className="form-column">
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
                </div>
                <div className="form-row">
                    <label htmlFor="email">Email Address:</label>
                    <div className="form-column">
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
                </div>
                <div className="form-row">
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <div className="form-column">
                        <input
                            type="text"
                            name="phoneNumber"
                            id="phoneNumber"
                            placeholder="xxx-xxx-xxxx"
                            className={ formik.errors.phoneNumber && formik.touched.phoneNumber ? "form-error" : ""}
                            onChange={ formik.handleChange }
                            value={ formik.values.phoneNumber }
                        />
                        { formik.errors.phoneNumber && formik.touched.phoneNumber ? (
                            <div className="form-error-text">{ formik.errors.phoneNumber }</div>
                            ) : <div className="form-error-text">&nbsp;</div> }
                    </div>
                </div>
            </div>
            <h2>Dining Information</h2>
            <div id="diner-section">
                <div className="form-wrapper" id="diner-info">
                    <div className="form-row">
                        <label htmlFor="resDate">Choose Date:</label>
                        <div className="form-column">
                            <input
                                type="date"
                                id="resDate"
                                className={ formik.errors.resDate && formik.touched.resDate ? "form-error" : ""}
                                onChange={ (e) => {
                                        updateTimes({
                                            type: 'updated_times',
                                            date: e.target.value
                                        });
                                        formik.handleChange(e);
                                    }
                                }
                                value={ formik.values.resDate }
                            />
                            { formik.errors.resDate && formik.touched.resDate ? (
                                <div className="form-error-text">{ formik.errors.resDate }</div>
                            ) : <div className="form-error-text">&nbsp;</div> }
                        </div>
                    </div>
                    <div className="form-row">
                        <label htmlFor="resTime">Choose Time:</label>
                        <div className="form-column chevron">
                            <select
                                id="resTime"
                                name="resTime"
                                className={ formik.errors.resTime && formik.touched.resTime ? "form-error" : ""}
                                onChange={ formik.handleChange }
                                value={ formik.values.resTime }>
                                    { times }
                            </select>
                            { formik.errors.resTime && formik.touched.resTime ? (
                                    <div className="form-error-text">{ formik.errors.resTime }</div>
                            ) : <div className="form-error-text">&nbsp;</div> }
                        </div>
                    </div>
                    <div className="form-row">
                        <label htmlFor="guests">Number of Guests:</label>
                        <div className="form-column">
                            <div className="form-row" id="guests-row">
                                <button
                                type="button"
                                className="guests-btn"
                                onClick={() => {
                                    if (formik.values.guests > 1) {
                                        const newGuestNumber = formik.values.guests - 1;
                                            formik.setFieldValue("guests", newGuestNumber);
                                        }
                                    }
                                }
                                >-
                                </button>
                                <input
                                    type="number"
                                    placeholder="1"
                                    id="guests"
                                    className={ formik.errors.guests && formik.touched.guests ? "form-error" : ""}
                                    onChange={ formik.handleChange }
                                    value={ formik.values.guests }
                                />
                                <button
                                type="button"
                                className="guests-btn"
                                onClick={() => {
                                    if (formik.values.guests < 10) {
                                        const newGuestNumber = formik.values.guests + 1;
                                            formik.setFieldValue("guests", newGuestNumber);
                                        }
                                    }
                                }
                                >+
                                </button>
                            </div>
                            { formik.errors.guests && formik.touched.guests ? (
                                <div className="form-error-text">{ formik.errors.guests }</div>
                            ) : <div className="form-error-text">&nbsp;</div> }
                        </div>
                    </div>
                    <div className="form-row">
                        <label htmlFor="occasion">Occasion:</label>
                        <div className="form-column chevron">
                            <select
                                id="occasion"
                                name="occasion"
                                className={ formik.errors.occasion && formik.touched.occasion ? "form-error" : ""}
                                onChange={ formik.handleChange }
                                value={ formik.values.occasion }
                            >
                                <option value="None">Occasion</option>
                                <option value="Birthday">Birthday</option>
                                <option value="Anniversary">Anniversary</option>
                            </select>
                            <div className="convo-bubbles">
                                { convoBubbles }
                            </div>
                            <div className="form-error-text">&nbsp;</div>
                        </div>
                    </div>
                    <div className="form-column">
                        <div className="form-row radio-group">
                            <div className="form-row">
                                <label htmlFor="inside">Inside:</label>
                                <input
                                    type="radio"
                                    id="inside"
                                    name="location"
                                    className={ formik.errors.location && formik.touched.location ? "form-error radio-button" : "radio-button"}
                                    value="Inside"
                                    onChange={ formik.handleChange }
                                />
                            </div>
                            <div className="form-row">
                                <label htmlFor="outside">Outside:</label>
                                <input
                                    type="radio"
                                    id="outside"
                                    name="location"
                                    value="Outside"
                                    className={ formik.errors.location && formik.touched.location ? "form-error radio-button" : "radio-button"}
                                    onChange={ formik.handleChange }
                                />
                            </div>
                        </div>
                        { formik.errors.location && formik.touched.location ? (
                                <div className="form-error-text">{ formik.errors.location }</div>
                            ) : <div className="form-error-text">&nbsp;</div> }
                    </div>
                    <button data-testid="main-submit" className="btn-default" type="submit">Reserve Me!</button>
                </div>
                <img src={ restaurant } alt="Restaurant" />
            </div>
        </form>
    );
};

export default BookingForm;