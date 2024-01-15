import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderWrap = styled.header`
  margin: 74px 0 98px 0;
  padding: 0 80px;
  display: grid;
  grid-template-columns: 150px 3fr 1fr;
  word-break: keep-all;
`;

const Logo = styled.div`
  font: 400 2.4rem "Inter";
`;

const List = styled.div`
  font: 400 1.8rem "Inter";
  a {
    padding-left: 15px;
  }
  &.submenu {
    font: 400 1.2rem "Inter";
    text-align: end;
  }
`;

export default function Header() {
  return (
    <HeaderWrap>
      <Logo>
        <Link to={"/"}>BUSTAGO</Link>
      </Logo>
      <List>
        <Link to={"/check"}>조회/변경/취소</Link>
        <Link to={"/businfo"}>운행정보</Link>
        <Link to={"/announcement"}>고객지원</Link>
      </List>
      <List className="submenu">
        <Link to={"/"}>로그인</Link>
        <Link to={"/"}>회원가입</Link>
        <Link to={"/"}>마이페이지</Link>
      </List>
    </HeaderWrap>
  );
}
