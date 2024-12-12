import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from './components/navbar';
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Products from "./pages/Products";
import Contactus from "./pages/Contactus";
import Footer from "./components/footer";
import Analyticaltestingservices from "./pages/Analyticaltestingservices";
import Career from "./pages/Career";
function App() {
  return (
    <div className="app-container">
      <div className="main-content">
        <div className="App">
          <div id="content">
            <BrowserRouter>
              <Navbar />
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/aboutus" element={<Aboutus />} />
                <Route path="/products" element={<Products />} />
                <Route path="/contactus" element={<Contactus />} />
                <Route
                  path="/analyticaltestingservices"
                  element={<Analyticaltestingservices />}
                />
                <Route path="/career" element={<Career />} />
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
