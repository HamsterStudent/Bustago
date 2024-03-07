import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Mobile, PC } from "./responsive";
import { Layout } from "../style/componentStyle";

const HeaderWrap = styled.header`
  /* margin: 74px 0 98px 0; */
  position: absolute;
  top: 74px;
  display: grid;
  align-content: center;
  grid-template-columns: 150px 3fr 1fr;
  word-break: keep-all;
  select {
    width: 50px;
    height: 17px;
    border-radius: 3px;
    border: 0.25px solid #000;
  }
  @media only screen and (max-width: 1200px) {
    width: 90%;
  }
`;

const Logo = styled.div`
  height: 24px;
  a {
    display: block;
    width: 100%;
    height: 100%;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const List = styled.div`
  font: 500 1.6rem "Wanted Sans";
  a {
    padding-left: 54px;
  }
  select {
    margin-left: 15px;
  }
  &.submenu {
    font: 400 1.2rem "Wanted Sans";
    text-align: end;
    a {
      padding-left: 15px;
    }
  }
`;

export default function Header() {
  return (
    <Layout>
      <HeaderWrap>
        <Logo>
          <Link to={"/"}>
            <img src="assets/logo/logo.png" />
          </Link>
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
    </Layout>
  );
}
