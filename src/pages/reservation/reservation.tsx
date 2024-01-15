import styled from "styled-components";
import SubTitle from "../../shared/components/subTitle";
import {
  Alert,
  PaddingAround,
  PageList,
  TabMenu,
} from "../../shared/style/componentStyle";
import { BusTable } from "../../shared/style/tableStyle";
import Notice from "../../shared/components/notice";

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

const Step = styled.ul`
  display: flex;
  justify-content: center;
  height: 44px;
  margin-bottom: 32px;
  font: 700 2rem "Inter";
  li {
    padding: 0 27px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .stepActive {
    border-radius: 22px;
    background-color: #d9d9d9;
  }
`;

const InfoTabMenu = styled(TabMenu)`
  width: 35%;
`;
const InfoSelect = styled.div`
  display: flex;
  justify-content: space-between;
  border: solid 2px #d9d9d9;
  padding: 17px 33px 17px 33px;
  margin-bottom: 95px;
  h3 {
    font: 600 16px "Inter";
    margin-bottom: 8px;
  }
  .passengers {
    width: 30%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-left: 28px;
    border-left: solid 2px #d9d9d9;
    button {
      margin-top: 24px;
      color: #fff;
      font: 600 23px "Inter";
      border: none;
      height: 58px;
      width: 100%;
      border-radius: 11px;
      background: #000;
    }
  }
  ul {
    width: 66%;
    li {
      display: flex;
      justify-content: space-between;
      input {
        padding: 13px;
        height: 35px;
        border-radius: 17.5px;
        border: solid 1px #d9d9d9;
      }
    }
  }
`;

const Result = styled.section`
  width: 100%;
`;

export default function Reservation() {
  return (
    <Wrapper>
      <SubTitle>
        <h1>승차권 예매</h1>
        <p>
          예매 가능한 좌석정보와 운행정보, 간편한 결제방식으로
          <br /> 인터넷 승차권 예매를 하실 수 있습니다.
        </p>
      </SubTitle>
      <PaddingAround>
        <Step>
          <li className="stepActive">예매정보</li>
          <li>확인/결제</li>
          <li>예매완료</li>
        </Step>
        <InfoTabMenu>
          <div className="tab tabActive">편도</div>
          <div className="tab">왕복</div>
        </InfoTabMenu>
        <InfoSelect>
          <ul>
            <li>
              <div>
                <h3>출발지</h3>
                <input type="text" value={"동서울"} />
              </div>
              <div>
                <h3>가는일시</h3>
                <input type="text" value={"2024.01.01"} />
                <select name="" id="">
                  <option value="">13:00 이후</option>
                </select>
              </div>
              <div>
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
              <select name="" id="">
                <option value="">10명</option>
              </select>
            </div>
            <div>
              <h3>중고생</h3>
              <select name="" id="">
                <option value="">10명</option>
              </select>
            </div>
            <div>
              <h3>아동</h3>
              <select name="" id="">
                <option value="">10명</option>
              </select>
            </div>
            <button>조회하기</button>
          </div>
        </InfoSelect>
        <Alert>
          ※ 총 좌석이 '00' 또는 예매가능이 '현장발권' 인 버스는 출발 당일
          터미널에서 구매 가능합니다.
        </Alert>
        <Result>
          <TabMenu>
            <div className="tab tabActive">동서울 ... 동대구</div>
            <div className="tab">동대구 ... 동서울</div>
          </TabMenu>

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
                <td>프리미엄심야우등(주말)</td>
                <td>30</td>
                <td>30</td>
                <td>X</td>
                <td>
                  <button>상세보기</button>
                </td>
                <td>
                  <button>좌석선택</button>
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
      </PaddingAround>
    </Wrapper>
  );
}
