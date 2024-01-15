import React, { ReactNode } from "react";
import { PaddingAround } from "../style/componentStyle";
import styled from "styled-components";

const SubTitleWrap = styled.section`
  margin-bottom: 102px;
  h1 {
    font: 700 5rem "Inter";
    margin: 98px 0 42px 0;
  }
  p {
    font: 400 1.8rem "Inter";
  }
`;
export default function SubTitle({ children }: { children: ReactNode }) {
  return (
    <SubTitleWrap>
      <PaddingAround>{children}</PaddingAround>
    </SubTitleWrap>
  );
}
