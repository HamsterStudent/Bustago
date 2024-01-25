import React from "react";
import styled from "styled-components";
import { useDialog } from "../../../shared/hooks/useDialog";
const TabMenu = styled.div`
  width: 100%;
  display: flex;
  .active {
    background: #d9d9d9;
  }
`;

const Tab = styled.div`
  width: 50%;
  height: 40px;
  border-radius: 12px 12px 0px 0px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #d9d9d9;
  border-bottom: none;
  .tabTitle {
    font: 600 1.6rem "Inter";
  }
`;

const Notice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #d9d9d9;
  border-bottom: none;
  height: 40px;
  svg {
    margin-left: 12px;
  }
  .title {
    font: 600 1.4rem "Inter";
  }

  p {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  span {
    font: 500 1.3rem "Inter";
    word-break: keep-all;
  }
`;

const Reservation = styled.div`
  padding: 4px 14px;
  width: 60%;
  div {
    display: flex;
    justify-content: space-between;
  }
`;

const Wrapper = styled.div`
  max-width: 1125px;
  h3 {
    font: 700 1.8rem "Inter";
    margin-bottom: 16px;
  }
`;
const MainTerminal = styled.div`
  margin-bottom: 48px;
  ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
  }
  li {
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 9.5%;
    height: 55px;
    word-break: keep-all;
    text-align: center;
    background-color: #ededed;
    &:nth-child(-n + 10) {
      margin-bottom: 5px;
    }
  }
`;
const DepartureArrival = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  section {
    width: 43%;
  }
`;
const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 9px;
  input {
    width: 70%;
  }
  .icon {
    padding: 2%;
    border-radius: 50%;
    background-color: #d9d9d9;
  }
`;
const KeywordList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  li {
    padding: 0.5% 1%;
    border-radius: 50%;
    background-color: #d9d9d9;
    font: 500 1.4rem "Inter";
  }
`;
const LocationList = styled.div`
  display: flex;
  width: 100%;
  height: 193px;
  border: 1px solid #d9d9d9;
  .keyword {
    width: 16%;
    border-right: solid 1px #d9d9d9;
    padding: 8px 19px;
    font: 500 1.8rem "Inter";
  }
  ul {
    padding: 14px 19px;
    font: 500 1.4rem "Inter";
    overflow-y: scroll;
    scrollbar-width: none;
    li {
      margin-bottom: 10px;
    }
  }
`;

const SearchSecton = ({ sectionName }: { sectionName: string }) => {
  const wordSearchList = [
    "★",
    "ㄱ",
    "ㄴ",
    "ㄷ",
    "ㄹ",
    "ㅁ",
    "ㅅ",
    "ㅇ",
    "ㅈ",
    "ㅊ",
    "ㅋ",
    "ㅌ",
    "ㅍ",
    "ㅎ",
  ];
  return (
    <section>
      <h3>{sectionName}</h3>
      <Search>
        <select name="" id="">
          <option value="">지역 선택</option>
        </select>
        <input type="text" />
        <div className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <circle
              cx="7.23005"
              cy="7.23005"
              r="6.23005"
              stroke="#9E9E9E"
              stroke-width="2"
            />
            <path
              d="M11.4927 12.1485L16.0833 16.7391"
              stroke="#9E9E9E"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </Search>
      <KeywordList>
        {wordSearchList.map((x) => {
          return <li key={x}>{x}</li>;
        })}
      </KeywordList>
      <div>
        {sectionName === "출발지" ? (
          <TabMenu>
            <Tab className="active">
              <p className="tabTitle">인터넷 예매 가능</p>
            </Tab>
            <Tab>
              <p className="tabTitle">인터넷 예매 불가</p>
            </Tab>
          </TabMenu>
        ) : (
          <Notice>
            <Reservation>
              <div>
                <p className="title">예매 가능</p>
                <p>
                  <span>왕복</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="18"
                      viewBox="0 0 17 18"
                      fill="none"
                    >
                      <path
                        d="M10.5 1L15.5 6.5H1"
                        stroke="#C3C3C3"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6 16.5L1 11L15.5 11"
                        stroke="#C3C3C3"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </p>
                <p>
                  <span>편도</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="12"
                      viewBox="0 0 18 12"
                      fill="none"
                    >
                      <path
                        d="M1 5.57144L15.2857 5.57144"
                        stroke="#C3C3C3"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12.4286 1L17 5.57143L12.4286 10.1429"
                        stroke="#C3C3C3"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </p>
              </div>
            </Reservation>

            <Reservation>
              <p className="title">
                예매 불가
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                >
                  <path
                    d="M1 1L12 12"
                    stroke="#C3C3C3"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 1L1 12"
                    stroke="#C3C3C3"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </p>
            </Reservation>
          </Notice>
        )}

        <LocationList>
          <div className="keyword">ㄱ</div>
          <ul>
            <li>[경기]GS주유소(월곶)</li>
            <li>[경기]GS주유소(월곶)</li>
            <li>[경기]GS주유소(월곶)</li>
            <li>[경기]GS주유소(월곶)</li>
            <li>[경기]GS주유소(월곶)</li>
            <li>[경기]GS주유소(월곶)</li>
            <li>[경기]GS주유소(월곶)</li>
            <li>[경기]GS주유소(월곶)</li>
            <li>[경기]GS주유소(월곶)</li>
            <li>[경기]GS주유소(월곶)</li>
            <li>[경기]GS주유소(월곶)</li>
            <li>[경기]GS주유소(월곶)</li>
            <li>[경기]GS주유소(월곶)</li>
            <li>[경기]GS주유소(월곶)</li>
            <li>[경기]GS주유소(월곶)</li>
            <li>[경기]GS주유소(월곶)</li>
            <li>[경기]GS주유소(월곶)</li>
            <li>[경기]GS주유소(월곶)</li>
            <li>[경기]GS주유소(월곶)</li>
          </ul>
        </LocationList>
      </div>
    </section>
  );
};

export default function SearchTerminal() {
  const terminalList = [
    "강릉시외(강원)",
    "강릉시외(강원)",
    "강릉시외(강원)",
    "강릉시외(강원)",
    "강릉시외(강원)",
    "경주시외(경북)",
    "경주시외(경북)",
    "경주시외(경북)",
    "경주시외(경북)",
    "경주시외(경북)",
    "고양종합(경기)",
    "고양종합(경기)",
    "고양종합(경기)",
    "고양종합(경기)",
    "고양종합(경기)",
    "광주유스퀘어(광주)",
    "광주유스퀘어(광주)",
    "광주유스퀘어(광주)",
    "광주유스퀘어(광주)",
    "광주유스퀘어(광주)",
  ];

  return (
    <Wrapper>
      <h2>터미널 검색</h2>
      <MainTerminal>
        <h3>출발지 주요 터미널</h3>
        <ul>
          {terminalList.map((x) => {
            let ham = x.replace(" ", "\n");
            return (
              <li key={x}>
                <p>{ham}</p>
              </li>
            );
          })}
        </ul>
      </MainTerminal>
      <DepartureArrival>
        <SearchSecton sectionName={"출발지"} />
        <SearchSecton sectionName={"도착지"} />
      </DepartureArrival>
    </Wrapper>
  );
}
