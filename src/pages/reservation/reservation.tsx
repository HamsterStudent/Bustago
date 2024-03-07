import styled from "styled-components";
import SubTitle from "../../shared/components/subTitle";
import {
  Alert,
  Layout,
  PageList,
  TabMenu,
} from "../../shared/style/componentStyle";
import { BusTable } from "../../shared/style/tableStyle";
import Notice from "../../shared/components/notice";
import { useDialog } from "../../shared/hooks/useDialog";
import SelectSeat from "./components/SelectSeat";
import { useEffect, useState } from "react";
import ReservationDetail from "./components/reservationDetail";
import { Step } from "./style/reservationStyle";

const Wrapper = styled.section`
  width: 100%;
  select {
    padding: 0 13px;
    height: 35px;
    border-radius: 17.5px;
    border: 1px solid #d9d9d9;
    background-color: transparent;
  }
`;

const InfoTabMenu = styled(TabMenu)`
  width: 30%;
  height: 49px;
  .tab {
    font: 600 1.8rem "Wanted Sans";
    background: url("assets/icon/tabbg-mini.png") no-repeat;
    background-size: contain;
  }
  .tabActive {
    background: url("assets/icon/tabbg-mini-active.png") no-repeat;
    background-size: contain;
  }
`;

const ReservationTabMenu = styled(TabMenu)`
  display: flex;
  justify-content: space-between;
  .tab {
    width: 50%;
    padding: 16px 26px;
    font: 700 1.8rem "Wanted Sans";
    display: flex;
    justify-content: space-between;
    background: url("assets/icon/tabbg-reservation.png") no-repeat;
    background-size: contain;
  }
  .tabActive {
    background: url("assets/icon/tabbg-reservation-active.png") no-repeat;
    background-size: contain;
  }
`;
const InfoSelect = styled.div`
  display: flex;
  justify-content: space-between;
  border: solid 2px #ffe453;
  padding: 17px 33px 17px 33px;
  margin-bottom: 95px;
  h3 {
    font: 600 1.8rem "Wanted Sans";
    margin-bottom: 8px;
    text-align: center;
  }
  .passengers {
    width: 30%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-left: 28px;
    border-left: solid 2px #d9d9d9;
    .number {
      display: flex;
      align-items: center;
      padding: 7px;
      width: 100%;
      height: 40px;
      border-radius: 20px;
      border: solid 1px #e5e5e5;
      font: 500 1.6rem "Wanted Sans";
      span {
        padding: 0 5px;
      }
    }
    button {
      margin-top: 24px;
      color: #fff;
      font: 600 23px "Wanted Sans";
      border: none;
      height: 58px;
      width: 100%;
      border-radius: 28px;
      background: #ff8038;
    }
  }
  .date {
    width: 35%;
    input {
      width: 100%;
    }
  }
  .grade {
    width: 35%;
    select {
      width: 100%;
    }
  }
  ul {
    width: 66%;
    li {
      display: flex;
      justify-content: space-between;
      margin-bottom: 30px;
      &:last-child {
        margin-bottom: 0;
      }
      input {
        padding: 13px;
        height: 40px;
        border-radius: 20px;
        border: solid 1px #d9d9d9;
      }
    }
  }
`;

const Result = styled.section`
  width: 100%;
`;

export default function Reservation() {
  const { SelectSeatDialog, openDialog } = useDialog();
  const [step, setStep] = useState<"좌석선택" | "예매내역 확인">("좌석선택");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <Wrapper>
        <SubTitle>
          <h1>승차권 예매</h1>
          <p>
            예매 가능한 좌석정보와 운행정보, 간편한 결제방식으로
            <br /> 인터넷 승차권 예매를 하실 수 있습니다.
          </p>
        </SubTitle>
        <Step>
          <li className="stepActive">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="23"
              viewBox="0 0 16 23"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 22.5C8 22.5 16 15.2135 16 7.7669C16 3.47736 12.4183 0 8 0C3.58172 0 0 3.47736 0 7.7669C0 15.2135 8 22.5 8 22.5ZM8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12Z"
                fill="#ff8038"
              />
            </svg>
            예매정보
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="19"
              viewBox="0 0 27 19"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 2C0 0.895432 0.895431 0 2 0H25C26.1046 0 27 0.895431 27 2V3.23999H0V2ZM0 6.47999H27V16.36C27 17.4646 26.1046 18.36 25 18.36H2C0.895431 18.36 0 17.4646 0 16.36V6.47999ZM3.15991 11.8799C2.60763 11.8799 2.15991 12.3276 2.15991 12.8799V15.1999C2.15991 15.7522 2.60763 16.1999 3.15991 16.1999H6.55991C7.1122 16.1999 7.55991 15.7522 7.55991 15.1999V12.8799C7.55991 12.3276 7.1122 11.8799 6.55991 11.8799H3.15991Z"
                fill="#D9D9D9"
              />
            </svg>
            확인/결제
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18ZM13.7875 6.61631C14.1279 6.18138 14.0512 5.55287 13.6163 5.21249C13.1814 4.87212 12.5529 4.94876 12.2125 5.38369L7.46598 11.4487L4.74123 8.43986C4.37051 8.03049 3.73812 7.99916 3.32875 8.36988C2.91938 8.7406 2.88805 9.37299 3.25877 9.78236L6.78051 13.6713C6.97849 13.8899 7.2629 14.0099 7.55766 13.9994C7.85242 13.9888 8.12746 13.8486 8.30924 13.6163L13.7875 6.61631Z"
                fill="#D9D9D9"
              />
            </svg>
            예매완료
          </li>
        </Step>
        <InfoTabMenu>
          <div className="tab tabActive">
            <img src="assets/icon/round-trip-orange.png" alt="" />
            왕복
          </div>
          <div className="tab">
            <img src="assets/icon/one-way.png" alt="" />
            편도
          </div>
        </InfoTabMenu>
        <InfoSelect>
          <ul>
            <li>
              <div>
                <h3>출발지</h3>
                <input type="text" value={"동서울"} />
              </div>
              <div className="date">
                <h3>가는일시</h3>
                <input type="text" value={"2024.01.01"} />
              </div>
              <div className="grade">
                <h3>버스등급</h3>
                <select name="" id="">
                  <option value="">프리미엄심야우등(주말)</option>
                </select>
              </div>
            </li>
            <li>
              <div>
                <h3>도착지</h3>
                <input type="text" value={"동서울"} />
              </div>
              <div className="date">
                <h3>오는일시</h3>
                <input type="text" value={"2024.01.01"} />
              </div>
              <div className="grade">
                <h3>버스등급</h3>
                <select name="" id="">
                  <option value="">프리미엄심야우등(주말)</option>
                </select>
              </div>
            </li>
          </ul>
          <div className="passengers">
            <div>
              <h3>성인</h3>
              <div className="number">
                <img src="assets/icon/minus.png" alt="" />
                <span>10명</span>
                <img src="assets/icon/plus.png" alt="" />
              </div>
            </div>
            <div>
              <h3>중고생</h3>
              <div className="number">
                <img src="assets/icon/minus.png" alt="" />
                <span>10명</span>
                <img src="assets/icon/plus.png" alt="" />
              </div>
            </div>
            <div>
              <h3>아동</h3>
              <div className="number">
                <img src="assets/icon/minus.png" alt="" />
                <span>10명</span>
                <img src="assets/icon/plus.png" alt="" />
              </div>
            </div>
            <button>조회하기</button>
          </div>
        </InfoSelect>
        <Alert>
          ※ 총 좌석이 '00' 또는 예매가능이 '현장발권' 인 버스는 출발 당일
          터미널에서 구매 가능합니다.
        </Alert>
        <Result>
          <ReservationTabMenu>
            <div className="tab tabActive">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="23"
                viewBox="0 0 16 23"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 22.5C8 22.5 16 15.2135 16 7.7669C16 3.47736 12.4183 0 8 0C3.58172 0 0 3.47736 0 7.7669C0 15.2135 8 22.5 8 22.5ZM8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12Z"
                  fill="#ff8038"
                />
              </svg>
              <div className="direction">
                동서울
                <img src="assets/icon/one-way-dotted-active.png" alt="" />
                동대구
              </div>
              <div className="date">
                <img src="assets/icon/calendar.png" alt="" />
                2024.01.01
              </div>
            </div>
            <div className="tab">
              <div className="direction">
                동대구
                <img src="assets/icon/one-way-dotted.png" alt="" />
                동서울
              </div>
              <div className="date">2024.01.01</div>
            </div>
          </ReservationTabMenu>

          <BusTable>
            <thead>
              <tr className="cate">
                <th>출발시간</th>
                <th>출발지</th>
                <th>도착지</th>
                <th>버스회사</th>
                <th>버스등급</th>
                <th>총 좌석</th>
                <th>예매가능</th>
                <th>할인</th>
                <th>정보</th>
                <th>좌석선택</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>13:00</td>
                <td>소노캄호텔(엠블호텔)</td>
                <td>대전청사공원(선사유적)K</td>
                <td>대원고속</td>
                <td>
                  프리미엄심야우등(주말)<span className="type">직통</span>
                </td>
                <td>30</td>
                <td>30</td>
                <td>X</td>
                <td className="grey">
                  <button>상세보기</button>
                </td>
                <td className="orange">
                  <button onClick={openDialog}>좌석선택</button>
                  <SelectSeatDialog title="좌석선택">
                    {step === "좌석선택" && (
                      <SelectSeat onNext={() => setStep("예매내역 확인")} />
                    )}
                    {step === "예매내역 확인" && <ReservationDetail />}
                  </SelectSeatDialog>
                </td>
              </tr>
            </tbody>
          </BusTable>
        </Result>
        <PageList>
          <li className="numActive">1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
        </PageList>
        <Notice />
      </Wrapper>
    </Layout>
  );
}
