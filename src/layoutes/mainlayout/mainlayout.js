import { Outlet } from "react-router-dom";
import Header from "../../sections/header/header"

const Mainlayout =()=> {
    return <>
    <Header />
    <div className="py-[120px] w-[1440px] mx-auto">
    <Outlet />
    </div>
    </>
}
export default Mainlayout;