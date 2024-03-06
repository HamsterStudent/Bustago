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
`;

const ButtonWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 100px;
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
  justify-content: space-between;
  align-items: center;
  width: 230px;
  font: 700 1.8rem "Wanted Sans";
  margin-bottom: 15px;
  span {
    background-color: #afc7fc;
    color: #fff;
    text-align: center;
    padding: 5px 10px;
    border-radius: 20px;
    letter-spacing: -2%;
    font: 500 1.6rem "Wanted Sans";
  }
  img {
    object-fit: contain;
  }
`;

const InfoTable = styled.table`
  width: 100%;
  border-top: solid 1px;
  border-bottom: solid 1px;
  text-align: left;
  tr {
    height: 43px;
    border-bottom: solid 0.5px #797979;
  }
  th {
    background-color: #e5e5e5;
    border-right: solid 1px;
    padding-left: 15px;
    font: 700 1.6rem "Wanted Sans";
  }
  td {
    padding-left: 15px;
    font: 400 1.4rem "Wanted Sans";
  }
`;

export default function ReservationDetail() {
  const navigate = useNavigate();
  return (
    <Wrap>
      <h3>예매 정보</h3>
      <InfoWrap>
        <Departure>
          <span>가는편</span>
          <div>동서울</div>
          <img src="assets/icon/one-way-dotted-active.png" alt="" />
          <div>동대구</div>
        </Departure>
        <InfoTable>
          <tbody>
            <tr>
              <th>버스회사</th>
              <td>경북고속</td>
              <th>출발일</th>
              <td>2024.01.01(월)</td>
            </tr>
            <tr>
              <th>좌석</th>
              <td>07,08번</td>
              <th>출발시간</th>
              <td>11:40</td>
            </tr>

            <tr>
              <th>인원</th>
              <td>2명(성인 1명,중고생 1명)</td>
              <th>금액</th>
              <td>33,300원</td>
            </tr>
            <tr>
              <th>거리</th>
              <td>331km</td>
              <th>예상 소요시간</th>
              <td>220분</td>
            </tr>
            <tr>
              <th>상세노선</th>
              <td>대구북부-강릉-양양-낙산-속초</td>
            </tr>
          </tbody>
        </InfoTable>
      </InfoWrap>
      <InfoWrap>
        <Departure>
          <span>가는편</span>
          <div>동서울</div>
          <img src="assets/icon/one-way-dotted-active.png" alt="" />
          <div>동대구</div>
        </Departure>
        <InfoTable>
          <tbody>
            <tr>
              <th>버스회사</th>
              <td>경북고속</td>
              <th>출발일</th>
              <td>2024.01.01(월)</td>
            </tr>
            <tr>
              <th>좌석</th>
              <td>07,08번</td>
              <th>출발시간</th>
              <td>11:40</td>
            </tr>

            <tr>
              <th>인원</th>
              <td>2명(성인 1명,중고생 1명)</td>
              <th>금액</th>
              <td>33,300원</td>
            </tr>
            <tr>
              <th>거리</th>
              <td>331km</td>
              <th>예상 소요시간</th>
              <td>220분</td>
            </tr>
            <tr>
              <th>상세노선</th>
              <td>대구북부-강릉-양양-낙산-속초</td>
            </tr>
          </tbody>
        </InfoTable>
      </InfoWrap>
      <InfoWrap>
        <h3>결제 정보</h3>
        <InfoTable>
          <tr>
            <th>인원</th>
            <td>2명(성인 1명, 중고생 1명)</td>
          </tr>
          <tr>
            <th>매수</th>
            <td>2매</td>
            <th>결제금액</th>
            <td>66,600 원</td>
          </tr>
        </InfoTable>
      </InfoWrap>
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
