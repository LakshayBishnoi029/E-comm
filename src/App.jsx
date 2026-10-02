import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Cart from "./components/Cart";
import TopBanner from "./components/TopBanner";

import { Routes, Route } from "react-router-dom";

import Home from "./components/view/Home";


function App() {
  return (
    <div>
      {/* Top Signup Banner */}
      <TopBanner />

      {/* Navbar */}
      <Navbar logo="/images/shop-logo.png" />

      {/* Pages */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/cart" element={<Cart />} />
      </Routes>

      {/* Footer */}
      <Footer/>
    </div>
  );
}

export default App;