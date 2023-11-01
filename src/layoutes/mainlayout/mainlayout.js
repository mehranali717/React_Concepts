import { Outlet } from "react-router-dom";
import Header from "../../sections/header/header"

const Mainlayout =()=> {
    return <>
    <Header />
    <Outlet />
    </>
}
export default Mainlayout;