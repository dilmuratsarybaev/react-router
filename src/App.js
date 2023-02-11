import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { Header } from "./components/header/Header";
import { MyCart } from "./pages/MyCart";
import { MyOrders } from "./pages/MyOrders";
import { Product } from "./pages/product/Product";
import { ProductDetails } from "./pages/product/ProductDetails";
function App() {
  const [detailsProduct, setDetailsProduct] = useState(false);
  const [goBack, setGoBack] = useState(false);
  const navigate = useNavigate();
  const goBackHandler = (e) => {
    e.preventDefault();
    setGoBack((prevState) => !prevState);
    navigate("/");
  };

  const changeDetailsHandler = () => {
    setDetailsProduct((prevState) => !prevState);
  };
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* <Route path="/" element={<Header />} /> */}
        <Route path="/product" element={<  Product changeDetailsHandler={changeDetailsHandler} goBackHandler ={goBackHandler}/>} />
        <Route path="/product/:id/details" element={<ProductDetails goBackHandler={goBackHandler}/>} />
        <Route path="/my_cart" element={<MyCart goBackHandler={goBackHandler}/>} />
        <Route path="/my_orders" element={<MyOrders goBackHandler={goBackHandler} />} />
      </Routes>
    </div>
  );
}

export default App;
