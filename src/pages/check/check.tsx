import React from "react";
import SubTitle from "../../shared/components/subTitle";
import { BusTable } from "../../shared/style/tableStyle";
import Notice from "../../shared/components/notice";
import {
  Alert,
  Layout,
  PageList,
  TabMenu,
} from "../../shared/style/componentStyle";
import styled from "styled-components";

const CheckPeriod = styled.section`
  border: 2px solid #ffe453;
  width: 100%;
  height: 84px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 26px;
  margin-bottom: 12px;
  .chooseDateType {
    display: flex;
    justify-content: space-between;
    align-items: center;
    label {
      display: flex;
      align-items: center;
      margin-left: 15px;
      font: 500 1.6rem "Wanted Sans";
      input[type="radio"] {
        display: none;
      }
      input[type="radio"]:checked + .on {
        background: url("assets/icon/checked.png") no-repeat;
        background-size: inherit;
        background-color: #ff8038;
        background-position: center;
        border: none;
      }
      .on {
        width: 22px;
        height: 22px;
        border: solid 1.5px #aaaaaa;
        border-radius: 50%;
        margin-right: 7px;
      }
      &:first-child {
        margin-left: 0;
      }
    }
  }

  .chooseDate {
    width: 50%;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .line {
      width: 20px;
      border-top: solid 1px #aaa;
    }
    .date {
      position: relative;
      width: 45%;
      &::after {
        content: "";
        position: absolute;
        top: 7px;
        right: 15px;
        width: 24px;
        height: 24px;
        background: url("assets/icon/calendar.png") no-repeat;
        background-size: contain;
      }
      input[type="text"] {
        width: 100%;
        padding-left: 15px;
      }
    }
  }
  button {
    color: #fff;
    font: 600 23px "Wanted Sans";
    border: none;
    height: 47px;
    width: 20%;
    border-radius: 25px;
    background: #ff8038;
  }
  select {
    width: 15%;
  }
`;

const PeriocTabMenu = styled(TabMenu)`
  width: 25%;
  background: url("assets/main/tabActive-mini.png") no-repeat;
`;

const BusTableWrap = styled.div`
  margin-top: 79px;
  width: 100%;

  h2 {
    font: 700 1.8rem "Wanted Sans";
    margin-bottom: 12px;
  }
`;

export default function Check() {
  return (
    <Layout>
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
        <div className="chooseDateType">
          <label>
            <input
              type="radio"
              name="chooseDateType"
              id="reserveDate"
              checked
              value="예매일"
            />
            <span className="on"></span>
            <span>예매일</span>
          </label>

          <label>
            <input
              type="radio"
              name="chooseDateType"
              id="startDate"
              value="출발일"
            />
            <span className="on"></span>
            <span>출발일</span>
          </label>
        </div>
        <div className="chooseDate">
          <div className="date">
            <input type="text" value={"2024.01.01"} />
          </div>
          <div className="line"></div>
          <div className="date">
            <input type="text" value={"2024.01.01"} />
          </div>
        </div>

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
            <tr>
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
              <td className="orange">
                <button>상세보기</button>
              </td>
              <td>24.01.01</td>
              <td>소노캄호텔(엠블호텔)</td>
              <td>대전청사공원(선사유적)K</td>
              <td>24.01.01</td>
              <td>13:00</td>
              <td>
                프리미엄심야우등(주말)<span className="type">직통</span>
              </td>
              <td>30</td>
              <td>300,000</td>
              <td className="grey">
                <button>예매</button>
              </td>
            </tr>
            <tr>
              <td className="orange">
                <button>상세보기</button>
              </td>
              <td>24.01.01</td>
              <td>소노캄호텔(엠블호텔)</td>
              <td>대전청사공원(선사유적)K</td>
              <td>24.01.01</td>
              <td>13:00</td>
              <td>
                프리미엄심야우등(주말)<span className="type">직통</span>
              </td>
              <td>30</td>
              <td>300,000</td>
              <td className="grey">
                <button>예매</button>
              </td>
            </tr>
          </tbody>
        </BusTable>
        <PageList>
          <li className="numActive">1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
        </PageList>
      </BusTableWrap>
      <Notice />
    </Layout>
  );
}
