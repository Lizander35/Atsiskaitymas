import Header from "./assets/components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./assets/components/Home";
import Contact from './assets/components/Contact'
import Footer from "./assets/components/Footer";
import Testimonials from "./assets/components/Testimonials";
import Clients from './assets/components/Clients';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />    
          <Route path="/contact" element={<Contact />} />
          <Route path="/testimonials" element={<Testimonials/>} />
          <Route path="/clients" element={<Clients/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
