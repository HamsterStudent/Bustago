import React, { useEffect, useState } from "react";
import SubTitle from "../../shared/components/subTitle";
import { BusTable } from "../../shared/style/tableStyle";
import { PaddingAround, PageList } from "../../shared/style/componentStyle";
import styled from "styled-components";
import BusCompanyInfo from "./components/busCompanyInfo";
import TerminalInfo from "./components/terminalInfo";

const TabMenu = styled.div`
  display: flex;
  width: 35%;
  height: 44px;
  margin: 32px auto;
  div {
    padding: 15px 23px;
    border-radius: 22px;
    font: 700 2rem/1.5rem "Wanted Sans";
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
      background-color: #d9d9d9;
    }
  }
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
    <div>
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
      {active === "버스회사 안내" ? <BusCompanyInfo /> : <TerminalInfo />}
    </div>
  );
}
