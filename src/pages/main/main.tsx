import React, { useState } from "react";
import styled from "styled-components";
import { PaddingAround } from "../../shared/style/componentStyle";
import { useNavigate } from "react-router-dom";
import { Dialog } from "../../shared/components/dialog";
import SearchTerminal from "./components/searchTerminal";
import { useDialog } from "../../shared/hooks/useDialog";

const MainSection = styled.section`
  display: flex;
  justify-content: space-between;
`;

const InfoSection = styled(MainSection)`
  word-break: keep-all;
  align-items: center;
  margin-bottom: 127px;
  h1 {
    font: 700 5.5rem/6.3rem "Inter";
    margin-bottom: 40px;
  }
  p {
    font: 500 2.4rem/2.8rem "Inter";
  }
`;

const ReservationSearch = styled.div`
  max-width: 625px;
  width: 50%;
  height: 580px;
  font: 600 1.8rem "Inter";
  p {
    font: 400 1.6rem "Inter";
  }
`;
const ReservationInfo = styled.div`
  padding: 33px;
  box-sizing: border-box;
  border-radius: 0px 0px 30px 30px;
  background: #ebebeb;
  max-height: 500px;
  .departureArrival {
    label {
      font: 600 1.8rem "Inter";
    }
    input {
      width: 80%;
      height: 40px;
      border-radius: 20px;
      background: #fff;
      border: none;
    }
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;
    }
  }
  .date {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 25px 0;
    border-top: solid 0.5px #8f8f8f;
    border-bottom: solid 0.5px #8f8f8f;
    display: flex;
    h2 {
      margin-bottom: 10px;
    }
    div {
      width: 48%;
    }
    select {
      width: 100%;
      height: 40px;
      border-radius: 7px;
      border: none;
      background: #fff;
    }
  }
  .passengers {
    margin: 25px auto;
    width: 75%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
      width: 20%;
    }
    select {
      margin-top: 9px;
      width: 100%;
      height: 35px;
      border: none;
      border-radius: 17.5px;
      background: #fff;
    }
  }
`;

const BasicButton = styled.button`
  border-radius: 37px;
  border: none;
  background: #000;
  color: #fff;
`;
const ReservationBtn = styled(BasicButton)`
  width: 100%;
  padding: 16px;
  font: 700 2.4rem "Inter";
`;
const QuickBtn = styled(BasicButton)`
  width: 48%;
  padding: 10px;
  font: 700 1.8rem "Inter";
  &:last-child {
    background: #aaa;
  }
`;

const TabMenu = styled.div`
  width: 100%;
  max-height: 80px;
  display: flex;
  .active {
    background: #ebebeb;
  }
`;

const Tab = styled.div`
  width: 50%;
  height: 80px;
  border-radius: 30px 30px 0px 0px;
  background: #d9d9d9;
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    font: 700 3.6rem "Inter";
  }
`;

const QuickSection = styled(MainSection)`
  margin-bottom: 81px;
  height: 484px;
  h2 {
    font: 700 4rem "Inter";
  }
  h3 {
    font: 600 2.5rem "Inter";
  }
`;

const QuickMenu = styled.div`
  width: 32%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 30px;
  padding: 34px;
  background: #d9d9d9;

  p {
    font: 500 1.8rem "Inter";
  }
  &.notice {
    border: 1px solid #c3c3c3;
    background: transparent;
    font: 400 1.4rem "Inter";
    li {
      color: #757575;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      word-break: break-all;
      font: 400 1.6rem "Inter";
      color: #757575;
      padding: 22px 0;
      border-bottom: solid 0.5px #d9d9d9;
      &:last-child {
        border-bottom: none;
      }
    }
  }
  .flexWrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      font: 400 1.2rem "Inter";
      color: #757575;
    }
  }
  .btnWrap {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export default function Main() {
  const [active, setActive] = useState("편도");
  const navigate = useNavigate();
  const tabList = ["편도", "왕복"];
  const { SearchTerminalDialog, openDialog, closeDialog } = useDialog();

  const onclick = (e: React.MouseEvent<HTMLDivElement>) => {
    const {
      currentTarget: { textContent },
    } = e;
    setActive(`${textContent}`);
  };
  const handleButtonClick = () => {
    // 원하는 경로로 이동
    navigate("/reservation");
  };

  return (
    <>
      <InfoSection>
        <div>
          <h1>
            시외버스 예약은
            <br />
            언제나 버스타고!
          </h1>
          <p>
            빠르고 간편한 버스타고로 예약하세요!
            <br /> 이 다음에 부연 설명이 더 <br />
            추가 되어야 할 것 같다 귀찮군
          </p>
        </div>
        <ReservationSearch>
          <TabMenu>
            {tabList.map((x) => {
              return (
                <Tab
                  key={x}
                  onClick={(e) => {
                    onclick(e);
                  }}
                  className={active === x ? "active" : undefined}
                >
                  <h2>{x}</h2>
                </Tab>
              );
            })}
          </TabMenu>
          {active === "편도" ? (
            <ReservationInfo>
              <div className="departureArrival">
                <div onClick={openDialog}>
                  <label htmlFor="">출발지</label>
                  <input type="text" name="" id="" />
                </div>
                <div>
                  <label htmlFor="">도착지</label>
                  <input type="text" name="" id="" />
                </div>
              </div>
              <SearchTerminalDialog title={"터미널 검색"}>
                <SearchTerminal />
              </SearchTerminalDialog>
              <div className="date">
                <div>
                  <h2>가는날</h2>
                  <select name="" id="">
                    <option value="">날짜 선택</option>
                  </select>
                </div>
                <div>
                  <h2>오는날</h2>
                  <select name="" id="">
                    <option value="">날짜 선택</option>
                  </select>
                </div>
              </div>

              <div className="passengers">
                <h3>인원수</h3>
                <div>
                  <p>성인</p>
                  <select name="" id="">
                    <option value="">10명</option>
                  </select>
                </div>
                <div>
                  <p>중고생</p>
                  <select name="" id="">
                    <option value="">10명</option>
                  </select>
                </div>
                <div>
                  <p>아동</p>
                  <select name="" id="">
                    <option value="">10명</option>
                  </select>
                </div>
              </div>
              <ReservationBtn onClick={handleButtonClick}>
                승차권 예매
              </ReservationBtn>
            </ReservationInfo>
          ) : (
            <ReservationInfo>
              <ReservationBtn onClick={handleButtonClick}>
                승차권 예매
              </ReservationBtn>
            </ReservationInfo>
          )}
        </ReservationSearch>
      </InfoSection>
      <QuickSection>
        <QuickMenu className="notice">
          <div className="flexWrap">
            <h3>공지사항</h3>
            <p>더보기 {">"}</p>
          </div>
          <ul>
            <li>[네이버페이] 123월 은행_증권사 시스템 점검 일...</li>
            <li>[네이버페이] 123월 은행_증권사 시스템 점검 일...</li>
            <li>[네이버페이] 123월 은행_증권사 시스템 점검 일...</li>
            <li>[네이버페이] 123월 은행_증권사 시스템 점검 일...</li>
            <li>[네이버페이] 123월 은행_증권사 시스템 점검 일...</li>
            <li>[네이버페이] 123월 은행_증권사 시스템 점검 일...</li>
          </ul>
        </QuickMenu>
        <QuickMenu>
          <div>
            <h2>
              티니패스
              <br />
              카드
            </h2>
            <p>교통카드와 용돈을 한 번에!</p>
          </div>
        </QuickMenu>
        <QuickMenu>
          <h2>
            캐시비
            <br />
            이용안내
          </h2>
          <div className="btnWrap">
            <QuickBtn>등록하기</QuickBtn>
            <QuickBtn>조회하기</QuickBtn>
          </div>
        </QuickMenu>
      </QuickSection>
    </>
  );
}
