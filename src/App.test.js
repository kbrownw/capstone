import { act, fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { initializeTimes } from './components/BookingPage';
import BookingHeader from './components/BookingHeader';

describe('BookingPage', () => {
  test('Renders the BookingForm heading', () => {
    render(<BookingHeader />);
    const headingElement = screen.getByText("Reserve a Table");
    expect(headingElement).toBeInTheDocument();
  })

  test('Should set the default booking times.', () => {
    expect(initializeTimes()).toEqual(["13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"])
  })
})
