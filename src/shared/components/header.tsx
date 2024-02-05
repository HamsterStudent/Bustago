import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Mobile, PC } from "./responsive";

const HeaderWrap = styled.header`
  margin: 74px 0 98px 0;
  display: grid;
  grid-template-columns: 150px 3fr 1fr;
  word-break: keep-all;
  select {
    width: 50px;
    height: 17px;
    border-radius: 3px;
    border: 0.25px solid #000;
  }
`;

const Logo = styled.div`
  font: 400 2.1rem "Inter";
`;

const List = styled.div`
  font: 400 1.6rem "Inter";
  a {
    padding-left: 54px;
  }
  select {
    margin-left: 15px;
  }
  &.submenu {
    font: 400 1.2rem "Inter";
    text-align: end;
    a {
      padding-left: 15px;
    }
  }
`;

export default function Header() {
  return (
    <HeaderWrap>
      <Logo>
        <Link to={"/"}>BUSTAGO</Link>
      </Logo>
      <PC>
        <List>
          <Link to={"/reservation"}>승차권 예매</Link>
          <Link to={"/check"}>조회/변경/취소</Link>
          <Link to={"/businfo"}>운행정보</Link>
          <Link to={"/announcement"}>고객지원</Link>
        </List>
        <List className="submenu">
          <Link to={"/"}>로그인</Link>
          <Link to={"/"}>회원가입</Link>
          <Link to={"/"}>마이페이지</Link>
          <select name="" id="">
            <option value="">KOR</option>
          </select>
        </List>
      </PC>
    </HeaderWrap>
  );
}
