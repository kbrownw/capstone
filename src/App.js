import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import BookingPage from "./components/BookingPage";
import { Routes, Route } from "react-router-dom";
import './App.scss';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={ <Homepage /> }></Route>
          <Route path="/book-a-table" element={ <BookingPage /> }></Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
