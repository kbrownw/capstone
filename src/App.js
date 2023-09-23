import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Specials from "./components/Specials";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <Specials />
        <Testimonials />
        <About />
      </main>
      <Footer />
    </>
  );
}

export default App;
