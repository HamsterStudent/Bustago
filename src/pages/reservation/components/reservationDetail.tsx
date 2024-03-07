import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrap = styled.section`
  h3 {
    font: 700 1.8rem "Wanted Sans";
    margin-bottom: 15px;
  }
`;

const InfoWrap = styled.div`
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
`;

const DepartureWrap = styled.div`
  width: 49%;
`;

const ButtonWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 50px;
  p {
    width: 100%;
    font: 500 1.8rem "Wanted Sans";
    text-align: center;
    margin-bottom: 20px;
  }
  button {
    border: none;
    height: 60px;
    padding: 5px 60px;
    font: 700 2.4rem "Wanted Sans";
    border-radius: 30px;
    background-color: #e5e5e5;
    &.orange {
      background-color: #ff8038;
      color: #fff;
      margin-left: 15px;
    }
  }
`;

const Departure = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  font: 700 1.8rem "Wanted Sans";
  margin-bottom: 15px;
  word-break: keep-all;
  .path {
    display: flex;
    div {
      font: 700 1.8rem "Wanted Sans";
    }
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 64px;
    background-color: #afc7fc;
    color: #fff;
    padding: 5px 10px;
    border-radius: 20px;
    letter-spacing: -2%;
    font: 500 1.6rem "Wanted Sans";
  }
  img {
    object-fit: contain;
  }
`;

const InfoSection = styled.table`
  width: 100%;
  background-color: #ededed;
  border-radius: 20px;
  ul {
    padding: 15px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    li {
      h4 {
        font: 700 1.6rem "Wanted Sans";
      }
      width: 49.5%;
      display: flex;
      gap: 15px;
      word-break: keep-all;
      font: 500 1.4rem "Wanted Sans";
      color: #797979;
      margin-bottom: 10px;
    }
  }
`;

const OrderInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font: 500 1.4rem "Wanted Sans";
  .priceWrap {
    display: flex;
    align-items: center;
    .price {
      font: 700 2.4rem "Wanted Sans";
      color: #ff8038;
      margin-left: 10px;
    }
  }
`;

export default function ReservationDetail() {
  const navigate = useNavigate();
  return (
    <Wrap>
      <h3>예매 정보</h3>
      <InfoWrap>
        <DepartureWrap>
          <Departure>
            <span>가는편</span>
            <div>
              <div className="path">
                <div>대전청사공원(선사유적)K</div>
                <img src="assets/icon/one-way-dotted-active.png" alt="" />
                <div>소노캄호텔(엠블호텔)</div>
              </div>

              <p>2024.01.01(월) 13:00</p>
            </div>
          </Departure>
          <InfoSection>
            <ul>
              <li>
                <h4>인원</h4>
                <p>성인 2명, 중고생 4명, 아동 10명</p>
              </li>
              <li>
                <h4>좌석</h4>
                <p>07, 08, 09, 10, 11, 12, 13, 14, 15, 16</p>
              </li>
              <li>
                <h4>버스회사</h4>
                <p>경북고속</p>
              </li>
              <li>
                <h4>거리</h4>
                <p>331km</p>
              </li>
              <li>
                <h4>금액</h4>
                <p>33,300 원</p>
              </li>
              <li>
                <h4>예상 소요시간</h4>
                <p>220 분</p>
              </li>
              <li>
                <h4>상세노선</h4>
                <p>동서울-강릉-대전-오산-구미-동대구</p>
              </li>
            </ul>
          </InfoSection>
        </DepartureWrap>
        <DepartureWrap>
          <Departure>
            <span>가는편</span>
            <div>
              <div className="path">
                <div>대전청사공원(선사유적)K</div>
                <img src="assets/icon/one-way-dotted-active.png" alt="" />
                <div>소노캄호텔(엠블호텔)</div>
              </div>

              <p>2024.01.01(월) 13:00</p>
            </div>
          </Departure>
          <InfoSection>
            <ul>
              <li>
                <h4>인원</h4>
                <p>성인 2명, 중고생 4명, 아동 10명</p>
              </li>
              <li>
                <h4>좌석</h4>
                <p>07, 08, 09, 10, 11, 12, 13, 14, 15, 16</p>
              </li>
              <li>
                <h4>버스회사</h4>
                <p>경북고속</p>
              </li>
              <li>
                <h4>거리</h4>
                <p>331km</p>
              </li>
              <li>
                <h4>금액</h4>
                <p>33,300 원</p>
              </li>
              <li>
                <h4>예상 소요시간</h4>
                <p>220 분</p>
              </li>
              <li>
                <h4>상세노선</h4>
                <p>동서울-강릉-대전-오산-구미-동대구</p>
              </li>
            </ul>
          </InfoSection>
        </DepartureWrap>
      </InfoWrap>
      <h3>결제 정보</h3>
      <OrderInfo>
        <p>성인 4명, 중고생 8명, 아동 20명 / 총 30매</p>
        <div className="priceWrap">
          <p>결제금액</p>
          <p className="price">66,600원</p>
        </div>
      </OrderInfo>
      <ButtonWrap>
        <p className="notice">위 정보를 확인하셨습니까?</p>
        <button>취소</button>
        <button
          onClick={() => {
            navigate("/order");
          }}
          className="orange"
        >
          확인
        </button>
      </ButtonWrap>
    </Wrap>
  );
}
