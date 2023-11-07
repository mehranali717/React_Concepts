import { useEffect, useState } from "react";

const useCart = () => {
  const [cartData, setCartData] = useState(() => {
    const storedValue = localStorage.getItem('cart');
    return storedValue ? JSON.parse(storedValue) : [];
  });
  // const [value, setValue] = useState(() => {
  //   const storedValue = localStorage.getItem('cart');
  //   return storedValue ? JSON.parse(storedValue) : [];
  // });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartData));
  }, [cartData]);
  const cartHandler = (item) => {
    const cartStoredData = JSON.parse(localStorage.getItem('cart'));
    if (cartStoredData) {
        let res = cartStoredData.some((dataitem) => dataitem.id === item.id);
        if (res) {
          let filteredData = cartStoredData.filter((dataitem) => dataitem.id !== item.id);
          localStorage.setItem('cart', JSON.stringify(filteredData));
          setCartData(filteredData);
        } else {
          localStorage.setItem('cart', JSON.stringify([...cartStoredData, item]));
          setCartData([...cartStoredData, item]);
        }
    } else {
        localStorage.setItem('cart',JSON.stringify([item]));
        setCartData([item]);
    }
  };
  return [cartData, cartHandler];
};
export default useCart;
