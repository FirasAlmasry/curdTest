import About from "./componants/About";
import Home from "./componants/Home";
import Navbar from "./componants/Navber";
import {Routes, Route} from "react-router-dom";
import ProductDetails from "./componants/ProductDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
        </Routes>
    </div>
  );
}

export default App;
