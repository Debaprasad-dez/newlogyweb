import "./App.css";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Contact from "./Components/Contact";
import Aboutus from "./Components/Aboutus";
import Products from "./Components/Products";
import ScrollToTop from "./functionalities/ScrollToTop";
import ArticlesPage from "./Components/ArticlesPage/ArticlesPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/products" element={<Products />} />
        <Route path="/articles" element={<ArticlesPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
