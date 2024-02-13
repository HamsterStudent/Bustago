import React from "react";
import SubTitle from "../../shared/components/subTitle";
import { BusTable } from "../../shared/style/tableStyle";
import Notice from "../../shared/components/notice";
import {
  Alert,
  PaddingAround,
  TabMenu,
} from "../../shared/style/componentStyle";
import styled from "styled-components";

const CheckPeriod = styled.section`
  border: 2px solid #d9d9d9;
  width: 100%;
  height: 84px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 26px;
  margin-bottom: 12px;
  button {
    color: #fff;
    font: 600 23px "Wanted Sans";
    border: none;
    height: 47px;
    width: 20%;
    border-radius: 11px;
    background: #000;
  }
  select {
    width: 15%;
  }
  input {
    width: 25%;
  }
`;

const PeriocTabMenu = styled(TabMenu)`
  width: 25%;
`;

const BusTableWrap = styled.div`
  margin-top: 79px;
  h2 {
    font: 700 1.8rem "Wanted Sans";
    margin-bottom: 12px;
  }
`;

export default function Check() {
  return (
    <div>
      <SubTitle>
        <h1>조회/변경/취소</h1>
        <p>
          예매 완료한 승차권의 조회/변경/취소와 발권 및<br />
          영수증 확인이 가능합니다.
        </p>
      </SubTitle>
      <PeriocTabMenu>
        <div className="tab tabActive">조회기간</div>
      </PeriocTabMenu>
      <CheckPeriod>
        <select name="" id="">
          <option value="">출발일</option>
        </select>
        <input type="text" value={"2024.01.01"} />
        <input type="text" value={"2024.01.01"} />
        <button>조회하기</button>
      </CheckPeriod>
      <Alert>
        <p>- 조회기간은 최대 1개월까지 가능합니다.</p>
        <p>
          - 예매 내역 확인 불가시 타사예매내역을 클릭하여 예매 내역 확인
          바랍니다.
        </p>
      </Alert>

      <BusTableWrap>
        <h2>예매조회</h2>
        <BusTable>
          <thead>
            <tr className="cate">
              <th>상세보기</th>
              <th>예매일</th>
              <th>출발지</th>
              <th>도착지</th>
              <th>출발일</th>
              <th>출발시간</th>
              <th>등급</th>
              <th>매수</th>
              <th>금액</th>
              <th>예매상태</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <button>상세보기</button>
              </td>
              <td>24.01.01</td>
              <td>소노캄호텔(엠블호텔)</td>
              <td>대전청사공원(선사유적)K</td>
              <td>24.01.01</td>
              <td>13:00</td>
              <td>프리미엄심야우등(주말)</td>
              <td>30</td>
              <td>300,000</td>
              <td>
                <button>예매</button>
              </td>
            </tr>
          </tbody>
        </BusTable>
      </BusTableWrap>
      <Notice />
    </div>
  );
}
