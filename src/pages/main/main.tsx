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
  margin-bottom: 184px;
  h1 {
    font: 700 7.3rem/101px "Inter";
  }
  p {
    font: 500 3rem "Inter";
  }
`;

const ReservationSearch = styled.div`
  max-width: 625px;
  width: 50%;
  height: 732px;
  font: 600 2.2rem "Inter";
  p {
    font: 400 2.2rem "Inter";
  }
`;
const ReservationInfo = styled.div`
  padding: 75px 31px 39px 31px;
  border-radius: 0px 0px 30px 30px;
  background: #ebebeb;
  .departureArrival {
    label {
      font: 600 22px "Inter";
    }
    input {
      width: 80%;
      height: 39px;
      border-radius: 19.5px;
      background: #fff;
      border: none;
    }
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 29px;
    }
  }
  .date {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 38px 0;
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
      height: 49px;
      border-radius: 7px;
      border: none;
      background: #fff;
    }
  }
  .passengers {
    margin: 23px auto;
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

const QuickBtn = styled(BasicButton)`
  width: 48%;
  padding: 10px;
  font: 700 20px "Inter";
`;
const ReservationBtn = styled(BasicButton)`
  width: 100%;
  padding: 19px;
  font: 700 30px "Inter";
`;

const TabMenu = styled.div`
  width: 100%;
  display: flex;
  .active {
    background: #ebebeb;
  }
`;

const Tab = styled.div`
  width: 50%;
  height: 94px;
  border-radius: 30px 30px 0px 0px;
  background: #d9d9d9;
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    font: 700 4rem "Inter";
  }
`;

const QuickSection = styled(MainSection)`
  margin-bottom: 81px;
  height: 521px;
  h2 {
    font: 700 4rem "Inter";
  }
  h3 {
    font: 600 2.5rem "Inter";
  }
`;

const QuickMenu = styled.div`
  width: 407px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 30px;
  padding: 45px;
  background: #d9d9d9;
  p {
    font: 500 1.8rem "Inter";
  }
  &.notice {
    border: 1px solid #c3c3c3;
    background: transparent;
    font: 400 1.6rem "Inter";
    li {
      color: #757575;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      word-break: break-all;
      font: 400 16px "Inter";
      color: #757575;
      padding: 23px 0;
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
  }
`;

export default function Main() {
  const [active, setActive] = useState("편도");
  const navigate = useNavigate();
  const tabList = ["편도", "왕복"];
  const { DialogWrapper, openDialog, closeDialog } = useDialog();

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
    <PaddingAround>
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
              <DialogWrapper>
                <SearchTerminal />
              </DialogWrapper>
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
                승차권 예약
              </ReservationBtn>
            </ReservationInfo>
          ) : (
            <ReservationInfo>
              <ReservationBtn onClick={handleButtonClick}>
                승차권 예약
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
            <li>[속보] 민지, 일본 또 가고싶어... 도대체 이게 몇...</li>
            <li>[속보] 민지, 일본 워홀 못가게 생겨... 너무 슬퍼...</li>
            <li>명절 승차권은 잡기가 정말 힘들다 어쩌구 저쩌...</li>
            <li>여기에 거의 편지를 써버리는 사람 어떤가요...?</li>
            <li>사실 무슨 말을 써야할지 모르겠어서 제 마음을...</li>
            <li>전해봅니다 하하 진주엄 보고싶어요 하하하하하하</li>
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
          <div className="flexWrap">
            <QuickBtn>등록하기</QuickBtn>
            <QuickBtn>조회하기</QuickBtn>
          </div>
        </QuickMenu>
      </QuickSection>
    </PaddingAround>
  );
}
