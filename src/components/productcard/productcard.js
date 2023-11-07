import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "../image/image";
import Custombtn from "../custombtn/customebtn";
import useFavorites from "../../hooks/favoriteHook/useFavorite.js";
import useCart from "../../hooks/cartHook/useCart.js";
const ProductCard = (props) => {
  const [favorites, setAddRemoveFavorites] = useFavorites("favorites");
  const [cartData, cartHandler] = useCart();
  return (
    <div className="w-[360px] shadow-lg rounded-[10px] flex justify-between  p-[20px]">
      <div className="p-[10px] flex gap-x-[20px]">
        <div className="rounded-full shadow w-[120px] h-[120px] flex p-[10px] flex justify-center items-center border-[1px] border-[#e0fefe]">
          <Image image={props.item.image} />
        </div>
        <div className="flex flex-col w-[140px] gap-[10px] ps-[10px]">
          <h3 className="text-[20px] text-[#003366] capitalize">
            {props.item.name}
          </h3>
          <span className="text-[16px] text-[#003366] capitalize">
            {props.item.category}
          </span>
          <span className="text-[16px] text-[#003366] capitalize italic">
            RS{props.item.price}/-
          </span>
          <Custombtn
            label={`${cartData.some((item)=>item.id === props.item.id)?"Remove Item":"Add To Cart"} `}
            className="cursor-pointer bg-[#33cc00]"
            onClick={() => cartHandler(props.item)}
          />
        </div>
      </div>
      <FontAwesomeIcon
        icon="heart"
        className={`cursor-pointer ${favorites.some((item)=>item.id === props.item.id)?"text-[red]":"text-[#e0d3f5]"} `}
        onClick={() => setAddRemoveFavorites(props.item)}
      />
    </div>
  );
};
export default ProductCard;
