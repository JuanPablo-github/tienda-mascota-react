import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function CartWidget() {
  const { getTotalItems } = useContext(CartContext);
  const totalItems = getTotalItems();

  return (
    <div className="cart-widget">
      <Link to="/Cart" className="cart-link">
        <FaShoppingCart />
        {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
      </Link>
    </div>
  );
}

export default CartWidget;
