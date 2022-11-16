import React from 'react';
import { render } from 'sass';

const CartTitle = ({ userName, count }) => {
  return <div className="cart-title">{`${userName}, you added ${count} product`}</div>;
};
export default CartTitle;
