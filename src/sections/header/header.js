import { Cart, Logo, Navbar } from "../../components";

const Header =()=> {
    return <header className="bg-[#004080] fixed w-[100%]">
                <div className="max-w-[1440px] flex justify-between items-center mx-auto">
                    <Logo />
                    <Navbar />
                    <Cart />
                </div>
    </header>
}
export default Header;