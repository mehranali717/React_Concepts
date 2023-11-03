import { useEffect, useState } from "react";

const useFavorites = (key) => {
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    const favItem = localStorage.getItem(key);
    if (favItem) setFavorites(JSON.parse(favItem));
  }, [key]);
  const setAddRemoveFavorites = (item) => {
    let data = JSON.parse(localStorage.getItem(key));
    if (data) {
      let res = data.some((dataitem) => dataitem.id === item.id);
      if (res) {
        let filteredData = data.filter((dataitem) => dataitem.id !== item.id);
        localStorage.setItem(key, JSON.stringify(filteredData));
        setFavorites(filteredData);
      } else {
        localStorage.setItem(key, JSON.stringify([...data, item]));
        setFavorites([...data, item]);
      }
    } else {
      localStorage.setItem(key, JSON.stringify([item]));
      setFavorites([item]);
    }
  };
  return [favorites, setAddRemoveFavorites];
};
export default useFavorites;
