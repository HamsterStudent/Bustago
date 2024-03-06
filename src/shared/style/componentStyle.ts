import styled from "styled-components";

export const PaddingAround = styled.article`
  padding: 0 80px;
`;
export const Layout = styled.section`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const Alert = styled.p`
  font: 500 1.4rem "Wanted Sans";
  margin-bottom: 16px;
`;

export const TabMenu = styled.div`
  width: 100%;
  height: 47px;
  display: flex;
  .active {
    /* background: #ebebeb; */
  }
  .tab {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font: 600 1.8rem "Inter";
    border-radius: 12px 12px 0px 0px;
    /* border: 2px solid #d9d9d9; */
    border-bottom: none;
    /* background: #fff; */
    &.tabActive {
      /* background: #d9d9d9; */
    }
  }
`;

export const PageList = styled.ul`
  height: 25px;
  width: 25%;
  margin: 41px auto;
  display: flex;
  justify-content: space-between;
  font: 600 1.4rem/2.5rem "Wanted Sans";
  text-align: center;
  .numActive {
    width: 25px;
    background-color: #ffe453;
    border-radius: 50%;
  }
`;

export const SearchBar = styled.div`
  position: relative;
  input {
    width: 355px;
    float: right;
  }
  &::after {
    content: "";
    position: absolute;
    top: 7px;
    right: 15px;
    width: 24px;
    height: 24px;
    background: url("assets/icon/search.png") no-repeat;
    background-size: contain;
  }
`;
