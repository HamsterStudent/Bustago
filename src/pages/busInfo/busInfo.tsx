import React from "react";
import SubTitle from "../../shared/components/subTitle";
import { BusTable } from "../../shared/style/tableStyle";
import { PaddingAround, PageList } from "../../shared/style/componentStyle";
import styled from "styled-components";

const TabMenu = styled.div`
  display: flex;
  width: 35%;
  height: 44px;
  margin: 32px auto;
  div {
    padding: 15px 23px;
    border-radius: 22px;
    font: 700 2rem/1.5rem "Inter";
    word-break: keep-all;
    margin-right: 10px;
    &:last-child {
      margin-right: none;
    }
    &.active {
      background-color: #d9d9d9;
    }
  }
`;

export default function BusInfo() {
  return (
    <div>
      <SubTitle>
        <h1>운행정보</h1>
        <p>
          각 지역의 터미널 정보와 그 터미널에서 운행되는 <br />
          버스 회사의 정보를 확인하실 수 있습니다.
        </p>
      </SubTitle>
      <PaddingAround>
        <TabMenu>
          <div className="active">버스회사 안내</div>
          <div>터미널 안내</div>
        </TabMenu>
        <BusTable>
          <thead>
            <tr className="cate">
              <th>번호</th>
              <th>회사명</th>
              <th>전화번호</th>
              <th>주소</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>경기고속</td>
              <td>02{")"}464-6111</td>
              <td>서울특별시 성동구 왕십리로 125, 17층</td>
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
      </PaddingAround>
    </div>
  );
}
