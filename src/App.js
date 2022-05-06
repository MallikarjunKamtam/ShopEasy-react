import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Card from "./Card";

function App() {
  const [product, setProduct] = useState([]);
  // const [categoty, setCategory] = useState(0);

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

  // const arr = [];
  // const brands = product.map((x) => arr.push(x.brand));
  // // console.log(new Set(arr));

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

      <div className="cats">
        {product.map((cat, index) => {
          return <button key={cat.id}>{cat.brand}</button>;
        })}
      </div>
      <div className="cards">
        <Card key={product.id} product={product} />
      </div>
    </div>
  );
}

export default App;
