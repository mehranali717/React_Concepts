import { ProductCard } from "../../components";
import bagImage from "../../assets/images/shopping-bag.png";
const ProductSection = () => {
  const product = [
    { id:1, image: bagImage, name: "Shopping bag", category: "plastic", price: 200 },
    { id:2, image: bagImage, name: "letter", category: "envelop", price: 100 },
    { id:3, image: bagImage, name: "envelop", category: "page", price: 250 },
    { id:4, image: bagImage, name: "bag", category: "cloth", price: 400 },
    { id:5, image: bagImage, name: "Purse", category: "plastic", price: 200 },
    { id:6, image: bagImage, name: "Purse", category: "plastic", price: 200 },
  ];
  return (
    <div className="flex max-w-[1440px] flex-wrap justify-between gap-x-[30px]">
      {product.map((item, index)=><ProductCard item={item} key={index}/>)}
    </div>
  );
};
export default ProductSection;
