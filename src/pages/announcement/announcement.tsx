import React, { useState } from "react";
import SubTitle from "../../shared/components/subTitle";
import { Layout, PaddingAround } from "../../shared/style/componentStyle";
import styled from "styled-components";
import Notice from "./components/notice";
import FAQ from "./components/FAQ";

const TabMenu = styled.div`
  display: flex;
  height: 44px;
  margin: 32px auto;
  div {
    padding: 15px 50px;
    border-radius: 22px;
    font: 500 2rem/1.5rem "Wanted Sans";
    /* word-break: keep-all; */
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
    margin-right: 10px;
    &:last-child {
      margin-right: none;
    }
    &.active {
      background-color: #ffe453;
    }
  }
`;
const Line = styled.div`
  width: 100%;
  border-bottom: solid 1px #797979;
  margin: 32px auto;
`;

export default function Announcement() {
  const [active, setActive] = useState("공지사항");
  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const {
      currentTarget: { textContent },
    } = e;
    setActive(`${textContent}`);
  };
  return (
    <Layout>
      <SubTitle>
        <h1>고객지원</h1>
        <p>
          버스타고의 새로운 서비스와 1:1 문의, 유실물 센터 등<br />
          편리하고 신속한 온라인 고객 서비스를 제공합니다.
        </p>
      </SubTitle>

      <TabMenu>
        <div
          onClick={(e) => {
            onClick(e);
          }}
          className={active === "공지사항" ? "active" : undefined}
        >
          공지사항
        </div>
        <div
          onClick={(e) => {
            onClick(e);
          }}
          className={active === "FAQ" ? "active" : undefined}
        >
          FAQ
        </div>
      </TabMenu>
      <Line></Line>
      {active === "공지사항" ? <Notice /> : <FAQ />}
    </Layout>
  );
}
