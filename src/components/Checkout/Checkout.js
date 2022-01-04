import React, { useState, useEffect } from "react";
import "./Checkout.css";
function Checkout(props) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [code, setCode] = useState("");
  const [discount, setDiscount] = useState("");
  const [counter, setCounter] = useState(0);
  let sum = 0;
  const handleDiscountInput = (e) => {
    setCode(e.target.value);
  };
  const submitDiscount = (e) => {
    e.preventDefault();
    if (code == "save30") {
      setDiscount(totalPrice * (30 / 100));
      console.log(totalPrice - discount);
    }
  };
  useEffect(() => {
    return props.data.map((item) => {
      if (props.cartItems.includes(item.id)) {
        sum += item.price;
        setTotalPrice(sum);
      }
    });
  });
  return (
    <div>
      <div className="checkout-container">
        <p>SHOPPING CART</p>
        {props.data.map((item) => {
          return props.cartItems.includes(item.id) ? (
            <div className="cart-items" key={item.id}>
              <img src={item.src} />
              <h5>{item.name}</h5>
              <div className="price"> $ {item.price}</div>
            </div>
          ) : (
            ""
          );
        })}
      </div>
      <div className="total-price">
        <form onSubmit={submitDiscount}>
          <input
            type="text"
            placeholder="Discount Code"
            onChange={handleDiscountInput}
          />
          <input type="submit" value="Submit" />
        </form>

        <div className="priceAmount">Total Price : {totalPrice} $</div>
        <div className="new">
          {discount ? (
            <p className="newTotal">Total : {totalPrice - discount}$</p>
          ) : (
            ""
          )}
          {discount ? <p className="discount"> -{discount} $</p> : ""}
        </div>
      </div>
    </div>
  );
}

export default Checkout;
