import React from "react";
import { PageList, SearchBar } from "../../../shared/style/componentStyle";
import { BusTable } from "../../../shared/style/tableStyle";
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

export default function Notice() {
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
            <th>제목</th>
            <th>첨부</th>
            <th>등록일</th>
            <th>조회</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>[네이버페이] 1월 은행_증권사 시스템 점검 일정 안내</td>
            <td>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="22"
                viewBox="0 0 17 22"
                fill="none"
              >
                <path
                  d="M15.8523 10.2496L9.24532 19.1162C7.74917 21.1241 4.85777 21.6228 2.77544 20.2322C0.693112 18.8416 0.219477 16.0957 1.71562 14.0878L10.0162 2.9484C11.0635 1.54292 13.1033 1.19109 14.5609 2.16451C16.0185 3.13792 16.3526 5.07502 15.3053 6.4805L7.14836 17.4272C6.60975 18.15 5.55768 18.3315 4.80804 17.8309C4.0584 17.3303 3.88607 16.3311 4.42468 15.6083L9.36794 8.97443"
                  stroke="#BFBFBF"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </td>
            <td>2024.01.01</td>
            <td>435</td>
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
