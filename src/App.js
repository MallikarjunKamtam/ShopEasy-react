import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Card from "./Card";

function App() {
  const [product, setProduct] = useState([]);

  const fetchData = async () => {
    const data = await axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        const responseData = res.data.products;
        // console.log(responseData);
        setProduct(responseData);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="header">
        <a>
          <h1 className="main-head">ShopEasy</h1>
        </a>
        <div className="header-right">
          <input type="text" name="search" placeholder="Search Item..." />
          <ul>
            <li className="header-list-right">
              <a href="#">Home</a>
              <a href="#">My Orders</a>
              <a href="#">Categories</a>
              <a href="#">Customer care</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="cards">
        <Card product={product} />
      </div>
    </div>
  );
}

export default App;
