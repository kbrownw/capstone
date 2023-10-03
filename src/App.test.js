import { render, screen, fireEvent } from '@testing-library/react';
import { initializeTimes, updateTimes } from './components/BookingPage';
import BookingHeader from './components/BookingHeader';
import BookingPage from './components/BookingPage';
import { BrowserRouter } from 'react-router-dom';

describe('BookingHeader', () => {
  test('Renders the BookingForm heading', () => {
    render(<BookingHeader />);
    const headingElement = screen.getByText("Reserve a Table");
    expect(headingElement).toBeInTheDocument();
  })
})

describe('BookingForm', () => {
  test('Verify user can submit form.', () => {
    const firstName = "John";
    const lastName = "Smith";
    const email = "john.smith@test.com";
    const phone = "777-777-1234";
    const selectedDate = "2023-10-21";
    const handleSubmit = jest.fn();
    render(<BrowserRouter><BookingPage onSubmit={handleSubmit}/></BrowserRouter>);
    
    const firstNameInput = screen.getByLabelText(/First Name:/);
    const lastNameInput = screen.getByLabelText(/Last Name:/);
    const emailInput = screen.getByLabelText(/Email Address:/);
    const phoneInput = screen.getByLabelText(/Phone Number:/);
    const dateInput = screen.getByLabelText(/Choose Date:/);
    const insideInput = screen.getByLabelText(/Inside:/);

    fireEvent.change(firstNameInput, { target: { value: firstName }});
    fireEvent.change(lastNameInput, { target: { value: lastName }});
    fireEvent.change(phoneInput, { target: { value: phone }});
    fireEvent.change(emailInput, { target: { value: email }});
    fireEvent.change(dateInput, { target: { value: selectedDate }});
    fireEvent.click(insideInput);

    const submitButton = screen.getByTestId("main-submit");
    fireEvent.click(submitButton);
    expect(handleSubmit).toBeCalled();

    expect(handleSubmit).toHaveBeenCalledWith([firstName, lastName, email, phone, selectedDate, "15:00", 1, "None", "Inside"]);
  })
})

describe('BookingPage', () => {
  test('Should set the default booking times.', () => {
    expect(initializeTimes()).toEqual(["13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"])
  })

  test('Should find date selector in BookingForm', () => {
    render(<BrowserRouter><BookingPage /></BrowserRouter>);
    const dateSelection = screen.getByLabelText(/Choose Date:/);
    expect(dateSelection).toBeInTheDocument();
  })

  test('Should update bookingTimes value.', () => {
    const timeFunction = updateTimes( null, { type: 'updated_times', date: "2023-10-21"});
    expect(timeFunction).toEqual(["15:00", "17:00", "21:00"]);
  })
})
