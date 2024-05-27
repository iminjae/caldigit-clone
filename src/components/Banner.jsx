
const Banner = () => {
    return <div>

            <div className="relative h-[529px]">
                <div className="absolute text-center  w-[419px] h-[262px] ml-[508px] mt-[136px]">
                    <span className="text-white text-[22px] font-[300]">Uncompromising Endeavors</span>
                    <h3 className="text-white text-[48px] font-[800]">타협하지 않는 기술력</h3>
                    <p className="text-white text-[46px] font-[300]">최고만을 선보입니다</p>
                    <p className="text-white text-[16px] font-[300]">애플, 인텔과 기술개발을 시작으로 만들어진 칼디짓</p>
                    <button className="w-[106px] h-[47px] bg-white text-[15px] font-[500] mt-[20px] rounded-lg hover:underline">제품보기</button>
                </div>
                <img
                    className="absolute top-0 -z-10 w-full h-full object-cover"
                    src="https://caldigit.co.kr/AURA/mainpage/main1.JPG"
                />
            </div>

            <div className="relative h-[529px]">
                <div className="absolute text-center  w-[419px] h-[219px] ml-[250px] mt-[150px]">
                    <span className="text-white text-[22px] font-[300]">Authentic Design & Technology</span>
                    <h3 className="text-white text-[48px] font-[800]">기술과 디자인의 만남</h3>
                    <p className="text-white text-[46px] font-[300]">데스크셋업의 혁신</p>
                    <button className="w-[137px] h-[47px] bg-white text-[15px] font-[500] mt-[20px] rounded-lg hover:underline">브랜드 스토리</button>
                </div>
                <img
                    className="absolute top-0 -z-10 w-full h-full object-cover"
                    src="https://caldigit.co.kr/AURA/mainpage/main2.JPG"
                />
            </div>

            <div className="relative h-[529px]">
                <div className="absolute text-center  w-[419px] h-[262px] ml-[390px] mt-[140px]">
                    <span className="text-white text-[22px] font-[300]">Thunderbolt Technology</span>
                    <h3 className="text-white text-[46px] font-[300]">썬더볼트로 가능한</h3>
                    <p className="text-white text-[48px] font-[800]">초고속 속도와 안전성</p>
                    <p className="text-white text-[16px] font-[300]">Thunderbolt기술로 가능해지는 무궁무진한 세상</p>
                    <button className="w-[120px] h-[47px] bg-white text-[15px] font-[500] mt-[20px] rounded-lg hover:underline">썬더볼트란</button>
                </div>
                <img
                    className="absolute top-0 -z-10 w-full h-full object-cover"
                    src="https://caldigit.co.kr/AURA/mainpage/main3.JPG"
                />
            </div>
            <div className="relative h-[529px]">
                <div className="text-center mt-[265px]">
                    <h2 className=" text-[38px] font-[700] ">Instagram</h2>
                    <p className=" text-[18px] text-gray-600 mt-[20px]">칼디짓으로 완성된 데스크셋업을 만나보세요</p>   
                </div>
            </div>
           </div>;
  };
  
  export default Banner;
  