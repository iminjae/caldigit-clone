import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { SiNaver } from "react-icons/si";

const Footer = () => {
  return <div>
            <footer className="bg-black h-[444px] p-8">
                <div>
                    <div className="text-white text-[13px] float-left">
                        <button className="pr-[20px]">로그인/회원가입</button>
                        <button className="pr-[20px]">고객지원</button>
                        <button className="pr-[20px]">교환/반품 정책</button>
                    </div>
                    <div className="text-white float-right">
                        <button className="pr-[30px] w-[20px] h-[20px]"><FaInstagram /></button>
                        <button className="pr-[30px] w-[20px] h-[20px]"><FaFacebookF /></button>
                        <button className="pr-[30px] w-[20px] h-[20px]"><SiNaver /></button>
                    </div>
                    <br/>
                    <hr class="h-px my-3 bg-white border-0"/>
                </div>
                

                <div className="">
                    <div className="text-white pt-10 float-left">
                        <h3 className="text-[15.21px] font-[700]">(주)디엔에이치</h3>
                        <br />
                        <span className="text-[13px]">12469 경기도 가평군 설악면 유명로 1108-71 본동</span>
                        <span className="text-[13px] pl-[25px]">대표자 : 박태민</span>
                        <br />
                        <span className="text-[13px]">사업자 등록번호 : [888-87-02016]</span>
                        <br />
                        <span className="text-[13px]">통신판매업 신고 2021-경기가평-80</span>
                        <br />
                        <span className="text-[13px]">개인정보보호책임자 : 권진희(jinhee@dandhinc.com)</span>
                        <br />
                        <br />
                        <span className="text-[13px]">전화번호/이메일 : 1668-1695/korea@caldigit.com</span>
                        <br />
                        <span className="text-[13px]">Contact for more information.</span>
                    </div>  
                    <div className="text-white pt-10 float-right">
                        <h3 className="text-[15.21px] font-[700]">고객센터</h3>
                        <h2 className="text-[26px] font-[500]">1668-1695</h2>
                        <br />
                        <p className="text-[13px]">
                        업무시간: 평일 오전 10시 ~ 오후 5시
                        <br />
                        점심시간: 오후 1시 ~ 오후 2시
                        <br />
                        *매달 마지막 금요일: 오전 10시 ~ 오후 12시
                        </p>
                    </div>
                </div>

                {/* <div className="text-gray-400 text-[13px]">
                    <ul>
                        <li>
                            <button>개인정보처리방침</button>
                        </li>
                        <li>
                            <button>이용안내</button>
                        </li>
                        <li>
                            <button>사업자정보확인</button>
                        </li>
                        <li>
                            <button className="border-left">이용약관</button>
                        </li>
                    </ul>
                </div> */}
            </footer>
            
         </div>;
};

export default Footer;
