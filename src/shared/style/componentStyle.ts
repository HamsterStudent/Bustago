import styled from "styled-components";

export const PaddingAround = styled.article`
  padding: 0 80px;
`;

export const Alert = styled.p`
  font: 400 1.4rem "Inter";
  margin-bottom: 16px;
`;

export const TabMenu = styled.div`
  width: 100%;
  height: 49px;
  display: flex;
  .active {
    background: #ebebeb;
  }
  .tab {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font: 600 1.8rem "Inter";
    border-radius: 12px 12px 0px 0px;
    border: 2px solid #d9d9d9;
    border-bottom: none;
    background: #fff;
    &.tabActive {
      background: #d9d9d9;
    }
  }
`;

export const PageList = styled.ul`
  height: 25px;
  width: 25%;
  margin: 41px auto;
  display: flex;
  justify-content: space-between;
  font: 600 1.4rem/2.5rem "Inter";
  text-align: center;
  .numActive {
    width: 25px;
    background-color: #d9d9d9;
    border-radius: 50%;
  }
`;
