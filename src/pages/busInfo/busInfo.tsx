import React, { useEffect, useState } from "react";
import SubTitle from "../../shared/components/subTitle";
import { BusTable } from "../../shared/style/tableStyle";
import {
  Layout,
  PaddingAround,
  PageList,
} from "../../shared/style/componentStyle";
import styled from "styled-components";
import BusCompanyInfo from "./components/busCompanyInfo";
import TerminalInfo from "./components/terminalInfo";

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

export default function BusInfo() {
  const [active, setActive] = useState("버스회사 안내");
  const tabInfo = ["버스회사 안내", "터미널 안내"];

  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const {
      currentTarget: { textContent },
    } = e;
    setActive(`${textContent}`);
  };

  return (
    <Layout>
      <SubTitle>
        <h1>운행정보</h1>
        <p>
          각 지역의 터미널 정보와 그 터미널에서 운행되는 <br />
          버스 회사의 정보를 확인하실 수 있습니다.
        </p>
      </SubTitle>
      <TabMenu>
        {tabInfo.map((x) => {
          return (
            <div
              key={x}
              onClick={(e) => {
                onClick(e);
              }}
              className={active === x ? `active` : undefined}
            >
              {x}
            </div>
          );
        })}
      </TabMenu>
      <Line></Line>
      {active === "버스회사 안내" ? <BusCompanyInfo /> : <TerminalInfo />}
    </Layout>
  );
}
