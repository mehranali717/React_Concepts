const Image = (props) => {
  return <div className="w-[70px] h-[70px]">
      <img src={props.image} alt="loading..." className="w-[100%] h-[100%] cursor-pointer" />
    </div>
}
export default Image;
