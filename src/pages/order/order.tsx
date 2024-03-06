import React from "react";
import { Layout } from "../../shared/style/componentStyle";
import SubTitle from "../../shared/components/subTitle";
import { Step } from "../reservation/style/reservationStyle";

export default function Order() {
  return (
    <Layout>
      <SubTitle>
        <h1>승차권 예매</h1>
        <p>
          예매 가능한 좌석정보와 운행정보, 간편한 결제방식으로
          <br /> 인터넷 승차권 예매를 하실 수 있습니다.
        </p>
      </SubTitle>
      <Step>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="23"
            viewBox="0 0 16 23"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 22.5C8 22.5 16 15.2135 16 7.7669C16 3.47736 12.4183 0 8 0C3.58172 0 0 3.47736 0 7.7669C0 15.2135 8 22.5 8 22.5ZM8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12Z"
              fill="#D9D9D9"
            />
          </svg>
          예매정보
        </li>
        <li className="stepActive">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="19"
            viewBox="0 0 27 19"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 2C0 0.895432 0.895431 0 2 0H25C26.1046 0 27 0.895431 27 2V3.23999H0V2ZM0 6.47999H27V16.36C27 17.4646 26.1046 18.36 25 18.36H2C0.895431 18.36 0 17.4646 0 16.36V6.47999ZM3.15991 11.8799C2.60763 11.8799 2.15991 12.3276 2.15991 12.8799V15.1999C2.15991 15.7522 2.60763 16.1999 3.15991 16.1999H6.55991C7.1122 16.1999 7.55991 15.7522 7.55991 15.1999V12.8799C7.55991 12.3276 7.1122 11.8799 6.55991 11.8799H3.15991Z"
              fill="#ff8038"
            />
          </svg>
          확인/결제
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18ZM13.7875 6.61631C14.1279 6.18138 14.0512 5.55287 13.6163 5.21249C13.1814 4.87212 12.5529 4.94876 12.2125 5.38369L7.46598 11.4487L4.74123 8.43986C4.37051 8.03049 3.73812 7.99916 3.32875 8.36988C2.91938 8.7406 2.88805 9.37299 3.25877 9.78236L6.78051 13.6713C6.97849 13.8899 7.2629 14.0099 7.55766 13.9994C7.85242 13.9888 8.12746 13.8486 8.30924 13.6163L13.7875 6.61631Z"
              fill="#D9D9D9"
            />
          </svg>
          예매완료
        </li>
      </Step>
    </Layout>
  );
}
