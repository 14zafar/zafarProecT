import axios from "axios";
import { useState, useEffect } from "react";

export default function KarzinkaPizza({
  add,
  setTotal,
  karzinka,
  setKarzinka,
}) {
  const [son, setSon] = useState(JSON.parse(localStorage.getItem("sonn")) || 1);

  useEffect(() => {
    localStorage.setItem("sonn", JSON.stringify(son));
    setTotal((prevTotal) => prevTotal + add.price * son);
  }, [son]);

  useEffect(() => {
    if (son < 1) setSon(1);
  }, [son]);

  const Minus = (id) => {
    if (son > 1) {
      setSon(son - 1);
    } else {
      const newData = karzinka.filter((value) => value.id !== id);
      setKarzinka(newData);
      setTotal(0);
    }
  };

  const Pilus = () => {
    setSon(son + 1);
    axios
      .put("https://api.pizza.data-soft.uz/products/", {
        count: add.count,
      })
      .then((res) => {
        console.log("Update successful");
      })
      .catch((err) => {
        console.log("Axios PUT error:", err);
      });
  };

  return (
    <div className="product">
      <img src={add.img} alt={add.name} />
      <div className="productInfos">
        <div className="karzinkaInfo">
          <p>{add.name}</p>
          <span>
            {add.tonke}, {add.sm} cm
          </span>
        </div>

        <div className="ProductPrice">
          <div className="productCounter">
            <span onClick={() => Minus(add.id)}>-</span>
            <p>{son}</p>
            <span onClick={Pilus}>+</span>
          </div>
          <span>{`${add.price * son} ₽`}</span>
        </div>
      </div>
    </div>
  );
}
