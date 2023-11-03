import Image from "../image/image";
import LogoImage from "../../assets/images/logo.png"
import { Link } from "react-router-dom";
const Logo =()=> {
    return <Link to="home"><Image image={LogoImage}/></Link>
}
export default Logo ;