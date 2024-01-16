import React from "react";
import styled from "styled-components";

const Wrapper = styled.footer`
  width: 100%;
  height: 342px;
  background: #d9d9d9;
`;

const Inner = styled.div`
  padding: 0 80px;
  height: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  p {
    font: 400 1.4rem/2.3rem "Inter";
  }
  .footerInfo {
    width: 63%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 46px;
    margin-top: 58px;
    .bustagoInfo {
      display: flex;
      justify-content: space-between;
      margin-bottom: 19px;
      h2 {
        font: 400 3.3rem "Inter";
      }
      ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        li {
          font: 600 1.4rem "Inter";
          padding-right: 20px;
        }
      }
    }
  }
  .service {
    margin-top: 58px;
    h2 {
      font: 600 3rem "Inter";
      letter-spacing: -0.45px;
    }
    ul {
      display: flex;
      justify-content: space-between;
      padding-top: 10px;
    }
  }
`;

export default function Footer() {
  return (
    <Wrapper>
      <Inner>
        <div className="footerInfo">
          <div className="bustagoInfo">
            <h2>BUSTAGO</h2>
            <ul>
              <li>사업자정보</li>
              <li>개인정보처리방침</li>
              <li>홈페이지 이용악관</li>
              <li>이메일무단수집거부</li>
              <li>이용안내</li>
            </ul>
          </div>
          <p>
            (주)이동의즐거움
            <br />
            사업자등록번호 129-86-38970 | 통신판매업 2014-서울금천-1119 <br />
            서울특별시 중구 청계천로 24, 케이스퀘어시티 10층
          </p>
          <p>Copyright © 2014. 전국버스운송연합조합회 all right reserved</p>
        </div>
        <div className="service">
          <h2>Customer Service</h2>
          <ul>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="254"
              height="68"
              viewBox="0 0 254 68"
              fill="none"
            >
              <circle cx="127" cy="33.6698" r="33.6698" fill="black" />
              <path
                d="M142.343 21.1261H110.878C109.208 21.1261 107.854 22.4798 107.854 24.1498V43.533C107.854 45.2029 109.208 46.5567 110.878 46.5567H142.343C144.013 46.5567 145.366 45.2029 145.366 43.533V24.1498C145.366 22.4798 144.013 21.1261 142.343 21.1261Z"
                stroke="white"
                stroke-width="2.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
              />
              <path
                d="M143.624 22.3146L128.334 35.4128C127.343 36.2578 125.891 36.2578 124.901 35.4128L109.597 22.3146"
                stroke="white"
                stroke-width="2.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
              />
              <circle cx="33.6698" cy="33.6698" r="33.6698" fill="black" />
              <path
                d="M23.4404 40.5051C26.0201 44.8605 29.0532 50.0778 35.8387 52.8634C42.0926 55.4181 46.6892 53.479 48.1901 52.6171C49.691 51.7553 48.5966 47.0151 45.4228 42.6135C42.2489 38.2119 40.5135 41.1515 38.4028 41.1822C35.698 41.213 32.1176 39.7663 30.2414 36.6114C28.3653 33.4564 28.85 29.6704 30.2102 27.3619C31.2734 25.5612 34.713 25.5151 32.399 20.6364C30.0851 15.7577 26.4266 12.4796 24.9257 13.3414C23.4247 14.2033 19.4535 17.189 18.6405 23.8067C17.7493 30.9786 20.8763 36.1497 23.456 40.5051H23.4404Z"
                stroke="white"
                stroke-width="2.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
              />
              <circle cx="220.33" cy="33.6698" r="33.6698" fill="black" />
              <mask id="path-7-inside-1_39_236" fill="white">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M220.866 14.5242C209.037 14.5242 199.864 21.686 199.864 31.3551C199.864 36.413 202.374 40.7856 206.459 43.8048C206.8 44.0564 207.01 44.4121 207.021 44.7938L206.459 50.6811C206.495 51.6658 207.694 52.4846 208.958 51.3306L213.662 47.5917C214.014 47.4616 214.413 47.4399 214.786 47.5223C216.702 47.9561 218.739 48.1903 220.866 48.1903C232.695 48.1903 241.867 41.0285 241.867 31.3594C241.867 21.6903 232.695 14.5242 220.866 14.5242Z"
                />
              </mask>
              <path
                d="M206.459 43.8048L205.27 45.4131L205.272 45.4146L206.459 43.8048ZM207.021 44.7938L209.011 44.9838L209.023 44.8615L209.02 44.7388L207.021 44.7938ZM206.459 50.6811L204.468 50.4911L204.455 50.6232L204.46 50.7557L206.459 50.6811ZM208.958 51.3306L207.713 49.7649L207.66 49.8075L207.609 49.8537L208.958 51.3306ZM213.662 47.5917L212.968 45.716L212.668 45.827L212.418 46.026L213.662 47.5917ZM214.786 47.5223L215.227 45.5716L215.218 45.5695L214.786 47.5223ZM220.866 12.5242C208.384 12.5242 197.864 20.1782 197.864 31.3551H201.864C201.864 23.1938 209.689 16.5242 220.866 16.5242V12.5242ZM197.864 31.3551C197.864 37.1313 200.746 42.0697 205.27 45.4131L207.648 42.1964C204.002 39.5016 201.864 35.6947 201.864 31.3551H197.864ZM205.272 45.4146C205.216 45.3731 205.031 45.1953 205.021 44.8488L209.02 44.7388C208.989 43.6289 208.384 42.7397 207.646 42.195L205.272 45.4146ZM205.03 44.6038L204.468 50.4911L208.45 50.8711L209.011 44.9838L205.03 44.6038ZM204.46 50.7557C204.507 52.0177 205.291 53.1825 206.51 53.6667C207.839 54.1945 209.244 53.7771 210.306 52.8076L207.609 49.8537C207.495 49.9576 207.476 49.9329 207.57 49.9103C207.672 49.8857 207.825 49.885 207.986 49.9491C208.281 50.0662 208.447 50.3292 208.457 50.6065L204.46 50.7557ZM210.202 52.8964L214.907 49.1575L212.418 46.026L207.713 49.7649L210.202 52.8964ZM214.356 49.4675C214.346 49.4713 214.339 49.4729 214.336 49.4735C214.333 49.474 214.333 49.4739 214.336 49.4737C214.338 49.4736 214.341 49.4736 214.345 49.4739C214.349 49.4742 214.352 49.4747 214.354 49.4752L215.218 45.5695C214.494 45.4094 213.702 45.4445 212.968 45.716L214.356 49.4675ZM214.344 49.473C216.407 49.9399 218.592 50.1903 220.866 50.1903V46.1903C218.886 46.1903 216.997 45.9723 215.227 45.5717L214.344 49.473ZM220.866 50.1903C233.347 50.1903 243.867 42.5364 243.867 31.3594H239.867C239.867 39.5207 232.042 46.1903 220.866 46.1903V50.1903ZM243.867 31.3594C243.867 20.1831 233.348 12.5242 220.866 12.5242V16.5242C232.041 16.5242 239.867 23.1976 239.867 31.3594H243.867Z"
                fill="white"
                mask="url(#path-7-inside-1_39_236)"
              />
              <path
                d="M229.894 28.4201V31.2297L233.081 27.9063C233.234 27.7459 233.363 27.6275 233.469 27.5509C233.578 27.4744 233.722 27.4362 233.901 27.4362C234.134 27.4362 234.321 27.5054 234.464 27.6439C234.609 27.7787 234.682 27.9445 234.682 28.1413C234.682 28.3782 234.56 28.6132 234.316 28.8464L232.343 30.7159L234.617 33.9738C234.777 34.1997 234.897 34.3983 234.977 34.5696C235.058 34.7372 235.098 34.9012 235.098 35.0616C235.098 35.2401 235.027 35.395 234.884 35.5262C234.746 35.6574 234.557 35.723 234.316 35.723C234.09 35.723 233.906 35.6756 233.764 35.5809C233.622 35.4825 233.502 35.3531 233.403 35.1928C233.305 35.0324 233.217 34.8867 233.141 34.7555L231.222 31.8037L229.894 33.0773V34.7336C229.894 35.0689 229.817 35.3185 229.664 35.4825C229.511 35.6428 229.314 35.723 229.074 35.723C228.935 35.723 228.802 35.6866 228.675 35.6137C228.547 35.5408 228.449 35.4424 228.38 35.3185C228.329 35.2165 228.298 35.098 228.287 34.9632C228.276 34.8283 228.27 34.6334 228.27 34.3783V28.4201C228.27 28.0921 228.341 27.8461 228.484 27.6821C228.629 27.5182 228.826 27.4362 229.074 27.4362C229.318 27.4362 229.515 27.5182 229.664 27.6821C229.817 27.8425 229.894 28.0885 229.894 28.4201Z"
                fill="white"
              />
              <path
                d="M223.251 28.4201V34.2526H226.541C226.804 34.2526 227.004 34.3163 227.143 34.4439C227.285 34.5714 227.356 34.7318 227.356 34.9249C227.356 35.1217 227.287 35.282 227.148 35.406C227.01 35.5262 226.808 35.5863 226.541 35.5863H222.622C222.269 35.5863 222.014 35.508 221.857 35.3513C221.704 35.1946 221.627 34.9413 221.627 34.5915V28.4201C221.627 28.0921 221.7 27.8461 221.846 27.6821C221.995 27.5182 222.19 27.4362 222.431 27.4362C222.675 27.4362 222.872 27.5182 223.021 27.6821C223.174 27.8425 223.251 28.0885 223.251 28.4201Z"
                fill="white"
              />
              <path
                d="M218.898 34.6789L218.515 33.6731H215.258L214.875 34.7008C214.726 35.1017 214.598 35.3732 214.492 35.5153C214.387 35.6538 214.213 35.723 213.973 35.723C213.769 35.723 213.589 35.6483 213.432 35.4989C213.275 35.3495 213.197 35.18 213.197 34.9905C213.197 34.8812 213.215 34.7682 213.251 34.6516C213.288 34.535 213.348 34.3728 213.432 34.1651L215.482 28.9612C215.54 28.8118 215.609 28.6333 215.689 28.4255C215.773 28.2142 215.861 28.0393 215.952 27.9008C216.047 27.7623 216.169 27.6512 216.318 27.5673C216.471 27.4799 216.659 27.4362 216.881 27.4362C217.107 27.4362 217.295 27.4799 217.444 27.5673C217.597 27.6512 217.719 27.7605 217.81 27.8953C217.905 28.0302 217.983 28.1759 218.045 28.3326C218.111 28.4857 218.193 28.6916 218.291 28.9503L220.385 34.1214C220.549 34.515 220.631 34.801 220.631 34.9796C220.631 35.1654 220.553 35.3367 220.396 35.4934C220.243 35.6465 220.057 35.723 219.838 35.723C219.711 35.723 219.601 35.6993 219.51 35.6519C219.419 35.6082 219.343 35.5481 219.281 35.4715C219.219 35.3914 219.151 35.2711 219.078 35.1108C219.009 34.9468 218.949 34.8028 218.898 34.6789ZM215.684 32.4542H218.078L216.87 29.1471L215.684 32.4542Z"
                fill="white"
              />
              <path
                d="M212.856 28.9122H211.085V34.7338C211.085 35.069 211.011 35.3187 210.861 35.4827C210.712 35.643 210.519 35.7232 210.282 35.7232C210.041 35.7232 209.844 35.6412 209.691 35.4772C209.542 35.3132 209.467 35.0654 209.467 34.7338V28.9122H207.696C207.419 28.9122 207.213 28.8521 207.079 28.7318C206.944 28.6079 206.876 28.4458 206.876 28.2453C206.876 28.0376 206.946 27.8736 207.084 27.7534C207.226 27.6331 207.43 27.573 207.696 27.573H212.856C213.137 27.573 213.345 27.6349 213.48 27.7589C213.618 27.8828 213.687 28.0449 213.687 28.2453C213.687 28.4458 213.618 28.6079 213.48 28.7318C213.341 28.8521 213.133 28.9122 212.856 28.9122Z"
                fill="white"
              />
            </svg>
          </ul>
        </div>
      </Inner>
    </Wrapper>
  );
}