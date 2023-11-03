import { ProductCard } from "../../components";
import useFavorites from "../../hooks/favoriteHook/useFavorite";

const Favorites = () => {
  const [favorites, setAddRemoveFavorites] = useFavorites("favorites");
  return (
    <div className="flex max-w-[1440px] flex-wrap justify-between gap-x-[30px]">
      {favorites.length > 0 &&
        favorites.map((item) => <ProductCard item={item} />)}
    </div>
  );
};
export default Favorites;
