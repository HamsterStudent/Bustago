import React from "react";
import { BusTable } from "../../../shared/style/tableStyle";
import { PageList, SearchBar } from "../../../shared/style/componentStyle";
import styled from "styled-components";

const FilterResult = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 12px;
  select {
    width: 118px;
  }
`;

export default function BusCompanyInfo() {
  return (
    <>
      <FilterResult>
        <select name="" id="">
          <option value="">전체</option>
        </select>
        <SearchBar>
          <input type="text" placeholder="회사명을 입력해 주세요" />
        </SearchBar>
      </FilterResult>
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
    </>
  );
}
