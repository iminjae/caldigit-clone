
const Dropdown = ( {name} ) => {
  return <div className="dropdown">
            <button className="dropbtn hover-underline-animation">{name}</button>
            {name == "구매하기" &&
                (<div className="dropdown-content">
                    <a className="hover-underline-animation" href="#">전체상품</a>
                    <a className="hover-underline-animation" href="#">도킹스테이션</a>
                    <a className="hover-underline-animation" href="#">허브</a>
                    <a className="hover-underline-animation" href="#">저장장치</a>
                    <a className="hover-underline-animation" href="#">케이블&악세사리</a>
                </div>)
            }
            {name == "고객지원" &&
                (<div className="dropdown-content">
                    <a className="hover-underline-animation" href="#">카카오톡 문의</a>
                    <a className="hover-underline-animation" href="#">다운로드</a>
                    <a className="hover-underline-animation" href="#">제품 사용방법</a>
                </div>)
            }

            </div>
};

export default Dropdown;
