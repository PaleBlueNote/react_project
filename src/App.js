import logo from "./logo.svg";
import "./App.css";
import Profile from "./Profile";
import Navigationbar from "./Navigationbar";
import ProductDescription from "./ProductDescription";
import axios from "axios";
import { useState } from "react";
import Counter from "./Counter";

// const products = [
//   { id: 1, title: "product1", content: "content1", price: 10000 },
//   { id: 2, title: "product2", content: "content1", price: 20000 },
//   { id: 3, title: "product3", content: "content1", price: 30000 },
//   { id: 4, title: "product4", content: "content1", price: 12000 },
//   { id: 5, title: "product5", content: "content1", price: 440000 },
// ];

function App() {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const handlePlusClick = () => {
    setCount((prev) => prev + 1);
  };

  const handleButtonClick = async () => {
    await axios
      .get("https://codingapple1.github.io/shop/data2.json")
      .then((response) => {
        setProducts(response.data);
      });
  };
  return (
    <div>
      <Navigationbar></Navigationbar>
      <div className="container">
        <div className="row">
          {products ? (
            products.map((product) => (
              <ProductDescription key={product.id} product={product} />
            ))
          ) : (
            <div>표시할 상품이 없습니다</div>
          )}
          {isLogin ? <></> : <></>}
        </div>
      </div>
      <button onClick={handleButtonClick}>상품 불러오기</button>
      <Counter count={count} handlePlusClick={handlePlusClick} />
      <Counter count={count} handlePlusClick={handlePlusClick} />
    </div>
  );
}

export default App;
