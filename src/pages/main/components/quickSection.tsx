import React from "react";
import styled from "styled-components";
import { BasicButton, MainSection } from "../style/mainStyle";
import { media } from "../../../shared/style/media";
import { Layout } from "../../../shared/style/componentStyle";

const Wrap = styled(MainSection)`
  margin-bottom: 150px;
  display: flex;
  flex-wrap: wrap;
  h2 {
    font: 700 4rem "Wanted Sans";
  }
  h3 {
    font: 600 2.5rem "Wanted Sans";
  }
`;

const QuickMenu = styled.div`
  &:nth-child(-n + 2) {
    width: 49%;
    height: 359px;
    flex-direction: row;
    position: relative;
    margin-bottom: 45px;
    img {
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
  &:nth-child(1) {
    background-color: #ffcbad;
  }
  &:nth-child(2) {
    background-color: #9cb8ff;
  }
  width: 100%;
  max-height: 484px;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 30px;
  padding: 34px;
  background: #d9d9d9;
  ${media.phone`
    width: 100%;
    margin-bottom: 15px;
  `}
  p {
    font: 500 1.8rem "Wanted Sans";
  }
  &.notice {
    border: 1px solid #c3c3c3;
    background: transparent;
    font: 400 1.4rem "Wanted Sans";
    h3 {
      font: 700 3.6rem/3.6rem "Wanted Sans";
    }
    li {
      display: flex;
      justify-content: space-between;
      color: #757575;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      word-break: break-all;
      font: 500 1.4rem "Wanted Sans";
      color: #757575;
      padding: 22px 0;
      border-bottom: solid 0.5px #d9d9d9;
      &:last-child {
        border-bottom: none;
      }
    }
  }
  .flexWrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 34px;
    p {
      font: 400 1.2rem "Wanted Sans";
      color: #757575;
    }
  }
  .btnWrap {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export default function QuickSection() {
  return (
    <Wrap>
      <Layout>
        <QuickMenu>
          <h2>
            명절 승차권 <br />
            예매 안내
          </h2>
          <div>
            <img src="assets/main/quick01.png" alt="" />
          </div>
        </QuickMenu>
        <QuickMenu>
          <h2>
            캐시비
            <br />
            이용안내
          </h2>
          <div>
            <img src="assets/main/quick02.png" alt="" />
          </div>
        </QuickMenu>
        <QuickMenu className="notice">
          <div className="flexWrap">
            <h3>공지사항</h3>
            <p>더보기 {">"}</p>
          </div>
          <ul>
            <li>
              <p>[네이버페이] 123월 은행_증권사 시스템 점검 일...</p>{" "}
              <p>2024.01.01</p>
            </li>
            <li>
              <p>[네이버페이] 123월 은행_증권사 시스템 점검 일...</p>{" "}
              <p>2024.01.01</p>
            </li>
            <li>
              <p>[네이버페이] 123월 은행_증권사 시스템 점검 일...</p>{" "}
              <p>2024.01.01</p>
            </li>
            <li>
              <p>[네이버페이] 123월 은행_증권사 시스템 점검 일...</p>{" "}
              <p>2024.01.01</p>
            </li>
            <li>
              <p>[네이버페이] 123월 은행_증권사 시스템 점검 일...</p>{" "}
              <p>2024.01.01</p>
            </li>
          </ul>
        </QuickMenu>
      </Layout>
    </Wrap>
  );
}
