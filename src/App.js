import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Testimonial from "./pages/Testimonial";
import Features from "./pages/Features";
import Page404 from "./pages/Page404";
import Team from "./pages/Team";
import State from "./pages/State";
import Effects from "./pages/Effects";
import Product from "./pages/Product";
import MainStore from "./store/Store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Axiosdata from "./pages/Axiosdata";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Router>
        <Provider store= {MainStore}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Services" element={<Services />}></Route>
          <Route path="/Projects" element={<Projects />}></Route>
          <Route path="/Testimonial" element={<Testimonial />}></Route>
          <Route path="/Features" element={<Features />}></Route>
          <Route path="/Page404" element={<Page404 />}></Route>
          <Route path="/Team" element={<Team />}></Route>
          <Route path="/State" element={<State />}></Route>
          <Route path="/Effects" element={<Effects />}></Route>
          <Route path="/Product" element={<Product />}></Route>
          <Route path="Axiosdata/" element={<Axiosdata />}></Route>
          <Route path="Login/" element={<Login />}></Route>
        </Routes>
        <Footer />
        </Provider>
      </Router>
    </>
  );
}

export default App