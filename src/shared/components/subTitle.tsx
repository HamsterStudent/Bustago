import React, { ReactNode } from "react";
import { PaddingAround } from "../style/componentStyle";
import styled from "styled-components";

const SubTitleWrap = styled.section`
  margin-bottom: 102px;
  width: 100%;
  h1 {
    font: 700 4.6rem "Wanted Sans";
    margin: 200px 0 40px 0;
  }
  p {
    font: 400 1.8rem "Wanted Sans";
  }
`;
export default function SubTitle({ children }: { children: ReactNode }) {
  return <SubTitleWrap>{children}</SubTitleWrap>;
}
