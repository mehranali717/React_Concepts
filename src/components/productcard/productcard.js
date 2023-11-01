import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "../image/image";
import Custombtn from "../custombtn/customebtn";

const ProductCard = (props) => {
  return (
    <div className="w-[330px] shadow-lg rounded-[10px] flex justify-between  p-[20px] border-[1px] border-[#e0fefe]">
      <div className="p-[10px] flex gap-x-[20px]">
        <div className="rounded-full shadow w-[120px] h-[120px] flex p-[10px] flex justify-center items-center border-[1px] border-[#e0fefe]">
        <Image image={props.image} />
        </div>
        <div className="flex flex-col gap-[10px] border-s-[1px] border-s-[#eff5f5] ps-[10px]">
          <h3 className="text-[20px] text-[#003366] capitalize">Name</h3>
          <span className="text-[16px] text-[#003366] capitalize">
            category
          </span>
          <span className="text-[16px] text-[#003366] capitalize italic">price</span>
          <Custombtn label="Add To Cart" />
        </div>
      </div>
      <FontAwesomeIcon icon="heart" className="text-[#e0d3f5] cursor-pointer" />
    </div>
  );
};
export default ProductCard;
