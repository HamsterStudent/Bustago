import React, { useState } from "react";
import styled from "styled-components";

interface ITabMenu {
  initialActive: string;
  tabList: string[];
  width: string;
}

const TabMenuWrap = styled.div`
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

export default function TabMenuCompo({
  initialActive = "",
  tabList,
  width,
}: ITabMenu) {
  const [active, setActive] = useState(initialActive);

  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const {
      currentTarget: { textContent },
    } = e;
    setActive(`${textContent}`);
  };

  return (
    <TabMenuWrap>
      {tabList.map((tab) => {
        return (
          <div
            key={tab}
            onClick={(e) => {
              onClick(e);
            }}
            className={active === tab ? "active" : undefined}
          >
            {tab}
          </div>
        );
      })}
    </TabMenuWrap>
  );
}
