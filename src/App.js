import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import Reservations from "./components/Reservations";
import { Routes, Route } from "react-router-dom";
import './App.scss';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={ <Homepage /> }></Route>
          <Route path="/reservations" element={ <Reservations /> }></Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
