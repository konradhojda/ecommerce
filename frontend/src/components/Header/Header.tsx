import React from "react";
import { Link } from "react-router-dom";
import { ICartEntry } from "../../state/cart/cartState";

interface Props {
  cartItems: ICartEntry[];
}

const Header = ({ cartItems }: Props) => {
  return (
    <header className="row">
      <div>
        <Link to="/">E-commerce</Link>
      </div>
      <div>
        <Link to="/cart">
          Cart
          {cartItems.length > 0 && (
            <span className="badge">{cartItems.length}</span>
          )}
        </Link>
        <Link to="/signin">Sign In</Link>
      </div>
    </header>
  );
};

export default Header;
