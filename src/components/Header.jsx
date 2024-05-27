import Dropdown from "./Dropdown";
import Logo from "/images/logo.png";
import { IoSearch } from "react-icons/io5";

const Header = () => {
    return <div>
            {/* position : fixed */}
            <header className="flex justify-between items-center text-[13px] ">
                <div className="p-6">
                    <img className="w-[90px] h-[27px]" src={Logo} alt="CalDigit" />
                </div>
                <Dropdown name={"브랜드 스토리"}/>
                <Dropdown name={"썬더볼트란"}/>
                <Dropdown name={"구매하기"}/>
                <Dropdown name={"고객지원"}/>
                <Dropdown name={"기업구매"}/>
                <Dropdown name={"블로그"}/>
                <Dropdown name={"JOIN/LOGIN"}/>
                <Dropdown name={"ORDER"}/>
                <Dropdown name={"CART"}/>
                <div className="mr-[20px]">
                    <button ><IoSearch /></button>
                </div>
            </header>
           </div>;
  };
  
  export default Header;
  