import Logo from "/images/logo.png";
import { IoSearch } from "react-icons/io5";

const Header = () => {
    return <div>
            <header className="flex justify-between items-center">
                <div className="p-6">
                    <img className="w-[90px] h-[27px]" src={Logo} alt="CalDigit" />
                </div>
                <button className="hover-underline-animation">브랜드 스토리</button>
                <button className="hover-underline-animation">썬더볼트란</button>
                <button className="hover-underline-animation">구매하기</button>
                <button className="hover-underline-animation">고객지원</button>
                <button className="hover-underline-animation">기업구매</button>
                <button className="hover-underline-animation">블로그</button>
                <button className="hover-underline-animation">JOIN/LOGIN</button>
                <button className="hover-underline-animation">ORDER</button>
                <button className="hover-underline-animation">CART</button>
                <div className="p-5">
                    <button ><IoSearch /></button>
                </div>
            </header>
           </div>;
  };
  
  export default Header;
  