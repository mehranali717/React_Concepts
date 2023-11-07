import { ProductCard } from "../../components";
import useFavorites from "../../hooks/favoriteHook/useFavorite";

const Favorites = () => {
  const [favorites, setAddRemoveFavorites] = useFavorites("favorites");
  return (
    <div className="flex max-w-[1440px] flex-wrap justify-between gap-x-[30px]">
      {favorites.length>0?favorites.map((item, index) => <ProductCard item={item} key={index}/>):<h1 className="text-[red] text-center text-[20px] w-[100%]">Add Items To Favorite List</h1>}
    </div>
  );
};
export default Favorites;
