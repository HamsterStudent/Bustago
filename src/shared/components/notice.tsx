import React from "react";
import styled from "styled-components";
const NoticeWrap = styled.div`
  h2 {
    font: 700 2rem "Inter";
    display: flex;
    align-items: center;
    margin-top: 38px;
    margin-bottom: 39px;
  }
  svg {
    margin-right: 10px;
  }
  li {
    font: 300 2rem/3.2rem "Inter";
  }
`;

const ImgWrap = styled.div`
  width: 100%;
  img {
    width: 100%;
    object-fit: contain;
  }
`;
export default function Notice() {
  return (
    <>
      <NoticeWrap>
        <h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <circle cx="15.8571" cy="16.1428" r="15.8571" fill="#AAAAAA" />
            <path
              d="M8.35718 16.4444L13.8354 22L22.3572 12"
              stroke="white"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          인터넷 예매 시 유의사항
        </h2>
        <ul>
          <li>
            1. 당일 출발하는 차량의 출발시각 20분 이전까지 예매가 가능합니다
          </li>
          <li>
            2. [중고생] 요금으로 예매 후 승차 시에는 학생증(청소년증)을
            지참하셔야 합니다.
          </li>
          <li>
            3. 예매(또는 취소)단계에서 회선장애나 기타 통신장애 발생 시
            예매(취소)여부를 조회를 통해 반드시 직접 확인하셔야 합니다.
            확인하시지 않으신 경우에 부도위약금이 청구될 수 있으니 유의하시기
            바랍니다.
          </li>
          <li>4. 선택하신 좌석은 실제 좌석과 상이 할 수 있습니다.</li>
          <li>
            5. 승객들의 원활한 승차, 수송을 위하여 10분전까지 발권하여 주시기
            바랍니다.
          </li>
        </ul>
      </NoticeWrap>
      <NoticeWrap>
        <h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <circle cx="15.8571" cy="16.1428" r="15.8571" fill="#AAAAAA" />
            <path
              d="M8.35718 16.4444L13.8354 22L22.3572 12"
              stroke="white"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          취소 수수료 및 부도 위약금 안내
        </h2>
        <ImgWrap>
          <img src="assets/temp.png" alt="" />
        </ImgWrap>
      </NoticeWrap>
    </>
  );
}
