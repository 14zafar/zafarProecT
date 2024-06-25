import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import LogoName from "../images/Group 152.svg";
import kazina from "../images/Shopping bag.svg";
import down from "../images/Arrow down.svg";
import x from "../images/Union.svg";
import KarzinkaPizza from "./KarzinkaPizza";

function Header({ karzinka, setKarzinka, setTotal, total }) {
  const [karzinkaDiv, setKarzinkaDiv] = useState("allBox");

  const addKarzinka = () => {
    setKarzinkaDiv("add");
  };

  const closeKarzinka = () => {
    setKarzinkaDiv("allBox");
  };

  return (
    <div className="HomeHeader">
      <header>
        <Link to="/">
          <div className="logoName">
            <img src={LogoName} alt="Logo" />
          </div>
        </Link>
        <ul className="list">
          <Link to="/pizza">
            <li className="item">Акции</li>
          </Link>
          <Link to="/pizza">
            <li className="item">Пицца</li>
          </Link>
          <Link to="/pizza">
            <li className="item">Суши</li>
          </Link>
          <Link to="/pizza">
            <li className="item">Напитки</li>
          </Link>
          <Link to="/pizza">
            <li className="item">Закуски</li>
          </Link>
          <Link to="/pizza">
            <li className="item">Комбо</li>
          </Link>
          <Link to="/pizza">
            <li className="item">Десерты</li>
          </Link>
          <Link to="/pizza">
            <li className="item">Соусы</li>
          </Link>
          <li className="item">
            Другое <img src={down} alt="Dropdown" />
          </li>
        </ul>
        <div onClick={addKarzinka} className="shopCard">
          <img src={kazina} alt="Shopping Bag" />
          <p>{total}</p>
          <span>₽</span>
        </div>
      </header>
      <div className={karzinkaDiv}>
        <div className="karzinka">
          <div className="karzinkaHeader">
            <h1>Ваш заказ</h1>
            <img onClick={closeKarzinka} src={x} alt="Close" />
          </div>
          <div className="products">
            {karzinka?.map((item) => (
              <KarzinkaPizza
                key={item.id}
                karzinka={karzinka}
                setKarzinka={setKarzinka}
                total={total}
                setTotal={setTotal}
                add={item}
              />
            ))}
          </div>
          <div className="karzinkaFooter">
            <h1>Итого: {total} ₽</h1>
            {karzinka?.length !== 0 && (
              <Link to="/zakaz">
                <span>Оформить заказ</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {
  karzinka: PropTypes.array.isRequired,
  setKarzinka: PropTypes.func.isRequired,
  setTotal: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
};

export default Header;
