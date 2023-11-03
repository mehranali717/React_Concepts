import { useEffect, useState } from "react";

const useCart = (key) => {
  const [cartData, setCartData] = useState([]);
  useEffect(() => {
    const cartStoredData = localStorage.getItem(key);
    if (cartStoredData) setCartData(JSON.parse(cartStoredData));
  }, [key]);
  const cartHandler = (item) => {
    const cartStoredData = JSON.parse(localStorage.getItem(key));
    if (cartStoredData) {
        let res = cartStoredData.some((dataitem) => dataitem.id === item.id);
        if (res) {
          let filteredData = cartStoredData.filter((dataitem) => dataitem.id !== item.id);
          localStorage.setItem(key, JSON.stringify(filteredData));
          setCartData(filteredData);
        } else {
          localStorage.setItem(key, JSON.stringify([...cartStoredData, item]));
          setCartData([...cartStoredData, item]);
        }
    } else {
        localStorage.setItem(key,JSON.stringify([item]));
        setCartData([item]);
    }
  };
  return [cartData, cartHandler];
};
export default useCart;
