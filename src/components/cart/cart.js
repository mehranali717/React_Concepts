import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import useCart from "../../hooks/cartHook/useCart.js";
import ProductCard from "../productcard/productcard.js"
const Cart = () => {
  const [display, setDisplay] = useState(false);
  const [cartData, cartHandler] = useCart("cart");
  return (
    <>
      <FontAwesomeIcon
        icon="cart-shopping"
        className="text-[#fff] absolute right-[40px] cursor-pointer"
        onClick={() => setDisplay((prev) => !prev)}
      />
      {display && (
        <div className="bg-[#bfbfbf] h-[192vh] w-[400px] absolute p-[15px] right-[0] top-[0]">
          <div className="flex justify-between pb-[15px] border-b-[1px] border-b-[#fff] mb-[15px]">
            <h3 className="text-[#001a33] text-[18px] font-[500] capitalize">
              Shopping Cart
            </h3>
            <FontAwesomeIcon
              icon="xmark"
              className="text-[#001a33] cursor-pointer w-[25px] h-[25px]"
              onClick={() => setDisplay((prev) => !prev)}
            />
          </div>
          {cartData.length>0?cartData.map((item, index) => <ProductCard item={item} key={index}/>):<h1 className="text-[red] text-center text-[20px] w-[100%]">Add Items To Cart</h1>}
        </div>
      )}
    </>
  );
};
export default Cart;
