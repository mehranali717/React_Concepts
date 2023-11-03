import { Link } from "react-router-dom";
import useFavorites from "../../hooks/favoriteHook/useFavorite";

const Navbar =()=> {
    const [favorites, setAddRemoveFavorites] = useFavorites("favorites");
    return <nav>
                <ul>
                    <li><Link to="favorites" className="text-[#fff] text-[16px] capitalize font-[500] relative">favorites <span className="circularBadge">{favorites.length}</span></Link></li>
                </ul>
    </nav>
}
export default Navbar;