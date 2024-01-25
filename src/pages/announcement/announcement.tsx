import React, { useState } from "react";
import SubTitle from "../../shared/components/subTitle";
import { PaddingAround } from "../../shared/style/componentStyle";
import styled from "styled-components";
import Notice from "./components/notice";
import FAQ from "./components/FAQ";

const TabMenu = styled.div`
  display: flex;
  justify-content: left;
  width: 100%;
  font: 700 2rem/1.5rem "Inter";
  border-bottom: solid 0.5px #c3c3c3;
  padding-bottom: 22px;
  margin-bottom: 40px;
  div {
    padding: 0 24px;
    border-right: solid 1px #c3c3c3;
    &:first-child {
      padding-left: 0;
    }
    &:last-child {
      border: none;
    }
  }
  .active {
    font-weight: 700;
  }
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
    <div>
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

      {active === "공지사항" ? <Notice /> : <FAQ />}
    </div>
  );
}
