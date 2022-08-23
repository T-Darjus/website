import Navbar from "./components/navbar/Navbar";
import Main from "./pages/main/Main";
import Gallery from "./pages/gallery/Gallery";
import Aboutus from "./pages/aboutus/Aboutus";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import IconSvg from "./components/icon/IconSvg";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Main />} />
        <Route path={"/gallery"} element={<Gallery />} />
        <Route path={"/aboutus"} element={<Aboutus />} />
        <Route path={"/contact"} element={<Contact />} />
      </Routes>
      <ScrollToTop
        smooth
        top="300"
        style={{ backgroundColor: "#f5f5f5" }}
        component={<IconSvg />}
      />
      <Footer />
    </Router>
  );
}

export default App;
