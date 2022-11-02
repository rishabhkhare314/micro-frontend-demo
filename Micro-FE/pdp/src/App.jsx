import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import ProductDetail from "./ProductDetail";
import Header from "Home/Header";
import Footer from "Home/Footer";
import "./App.css";
const App = () => (
  <div>
    <Header />
    <ProductDetail />
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
