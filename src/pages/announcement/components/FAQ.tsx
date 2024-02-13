import React from "react";
import styled from "styled-components";
import { BusTable } from "../../../shared/style/tableStyle";
import { PageList } from "../../../shared/style/componentStyle";
const FilterResult = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;

const FAQTab = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 49px;
  background-color: #d9d9d9;
  border-radius: 41px;
  margin-bottom: 61px;
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font: 400 1.8rem "Wanted Sans";
    padding: 17px 46px;
    border-radius: 41px;
    &.active {
      background-color: #757575;
      font-weight: 700;
      color: #fff;
    }
  }
`;

const FAQTable = styled(BusTable)`
  vertical-align: middle;
  border-left: none;
  border-right: none;
  .mark {
    font: 500 3.3rem "Wanted Sans";
  }
  .mainText {
    text-align: initial;
  }
`;
export default function FAQ() {
  return (
    <div>
      <FAQTab>
        <li className="active">전체</li>
        <li>예매하기</li>
        <li>예매확인</li>
        <li>예매 변경/취소</li>
        <li>발권</li>
        <li>운행관련</li>
        <li>분실물안내</li>
        <li>기타</li>
      </FAQTab>
      <FilterResult>
        <input type="text" placeholder="회사명을 입력해 주세요" />
      </FilterResult>
      <FAQTable>
        <tbody>
          <tr>
            <td className="mark">Q</td>
            <td>예매하기</td>
            <td className="mainText">
              버스타고에서 시외버스를 예매하고 싶어요.
            </td>
            <td>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="13"
                viewBox="0 0 22 13"
                fill="none"
              >
                <path
                  d="M1 1L11 12L21 1"
                  stroke="#AAAAAA"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </td>
          </tr>
        </tbody>
      </FAQTable>
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
    </div>
  );
}
