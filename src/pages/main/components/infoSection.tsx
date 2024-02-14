import React, { useState } from "react";
import styled from "styled-components";
import { BasicButton, MainSection } from "../style/mainStyle";
import { Layout } from "../../../shared/style/componentStyle";
import { PC } from "../../../shared/components/responsive";
import { useDialog } from "../../../shared/hooks/useDialog";
import { useNavigate } from "react-router-dom";
import SearchTerminal from "./searchTerminal";

const Wrap = styled(MainSection)`
  background-color: #fffbe7;
  padding-top: 172px;
  word-break: keep-all;
  align-items: center;
  margin-bottom: 127px;
  scrollbar-width: thin;
  &::-webkit-scrollbar {
    width: 10px;
  }
  h1 {
    font: 700 5.5rem/6.3rem "Wanted Sans";
    margin-bottom: 30px;
  }
  p {
    font: 400 1.8rem/3.2rem "Wanted Sans";
    &.subtitle {
      font: 500 4.7rem/6.4rem "Wanted Sans";
      margin-bottom: 14px;
    }
  }
  .imgWrap {
    margin: 75px 0;
  }
`;
const ReservationSearch = styled.div`
  position: relative;
  width: 590px;
  height: 610px;
  background-size: cover;
  font: 600 1.8rem "Wanted Sans";
  p {
    font: 400 1.6rem "Wanted Sans";
  }
`;
const Background = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  max-width: 560px;
  max-height: 580px;
  background: url("assets/main/Rectangle.png") no-repeat;

  &.inactive {
    position: absolute;
    top: 0;
    right: 0;
    background: url("assets/main/Rectangle-grey.png") no-repeat;
  }
`;
const ReservationInfo = styled.div`
  padding: 33px;
  box-sizing: border-box;
  margin-top: 20px;
  max-height: 500px;
  .departureArrival {
    label {
      font: 600 1.8rem "Wanted Sans";
    }
    input {
      width: 80%;
      height: 40px;
      border-radius: 20px;
      background: #ffffff7a;
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
    border-top: solid 0.5px #252525;
    border-bottom: solid 0.5px #252525;
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
      background: #ffffff7a;
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
      background: #ffffff7a;
    }
  }
`;
const ReservationBtn = styled(BasicButton)`
  width: 100%;
  padding: 16px;
  font: 700 2.4rem "Wanted Sans";
`;

const TabMenu = styled.div`
  width: 100%;
  max-height: 80px;
  display: flex;
`;

const Tab = styled.div`
  width: 50%;
  height: 100px;
  border-radius: 30px 30px 0px 0px;
  display: flex;
  align-items: center;
  h2 {
    margin-left: 30px;
    font: 500 3.6rem "Wanted Sans";
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .icon {
    width: 30px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  &.active {
  }
  &:last-child {
    align-items: flex-start;
    justify-content: end;
  }
`;

export default function InfoSection() {
  const navigate = useNavigate();

  const [active, setActive] = useState("왕복");

  const tabList = ["왕복", "편도"];
  const { SearchTerminalDialog, openDialog } = useDialog();

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
    <Wrap>
      <Layout>
        <PC>
          <div>
            <p className="subtitle">
              한 마음으로
              <br />
              나아가는 여정,
            </p>
            <h1>버스타고와 함께!</h1>
            <p>
              매일의 일상에서 벗어나 멀리 떠나는 여행. <br />
              버스타고가 당신의 모든 시작을 응원합니다. <br />
              터미널 방문 없이 버스타고에서 바로 승차권을 예매하세요!
            </p>
          </div>
        </PC>
        <ReservationSearch>
          <Background className="inactive"></Background>
          <Background>
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
                    <h2>
                      <div className="icon">
                        <img
                          src={
                            x === "편도"
                              ? "assets/icon/one-way.png"
                              : "assets/icon/round-trip.png"
                          }
                          alt={x}
                        />
                      </div>
                      {x}
                    </h2>
                  </Tab>
                );
              })}
            </TabMenu>
            {active === "왕복" ? (
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
                <SearchTerminalDialog>
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
          </Background>
        </ReservationSearch>
        <div className="imgWrap">
          <img src="assets/main/info.png" alt="" />
        </div>
      </Layout>
    </Wrap>
  );
}
