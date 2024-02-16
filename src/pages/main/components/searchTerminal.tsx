import React from "react";
import styled from "styled-components";
import { useDialog } from "../../../shared/hooks/useDialog";
import { Mobile, PC } from "../../../shared/components/responsive";
const TabMenu = styled.div`
  width: 100%;
  display: flex;
`;

const Tab = styled.div`
  width: 50%;
  height: 43px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: none;
  background: url("assets/icon/tabbg.png") no-repeat;
  background-size: contain;
  .tabTitle {
    font: 600 1.6rem "Wanted Sans";
  }
  &.active {
    background: url("assets/icon/tabbg-active.png") no-repeat;
    background-size: contain;
    span {
      padding-right: 30px;
      padding-left: 0;
    }
  }
  span {
    padding-left: 30px;
  }
`;

const Notice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #ffe453;
  border-radius: 30px 30px 0 0;
  border-bottom: none;
  height: 51px;
  .title {
    font: 700 1.8rem "Wanted Sans";
    svg {
      margin-left: 20px;
    }
  }
  p {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  span {
    font: 500 1.4rem "Wanted Sans";
    word-break: keep-all;
    margin-left: 9px;
  }
`;

const Reservation = styled.div`
  padding: 4px 20px;
  div {
    display: flex;
    justify-content: space-between;
  }
`;

const Wrapper = styled.div`
  max-width: 1125px;
  h3 {
    font: 700 1.8rem "Wanted Sans";
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
    max-width: 103px;
    height: 55px;
    word-break: keep-all;
    text-align: center;
    border: solid 1px #dadada;
    font: 500 1.6rem/2rem "Wanted Sans";
    &:nth-child(-n + 10) {
      margin-bottom: 5px;
    }
    &:hover {
      background-color: #fff5bb;
      border: solid 2px #ffe453;
      transition: ease-in-out 0.1s;
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
  select {
    width: 28%;
    padding: 5px 13px;
    font: 500 1.6rem/1.6rem "Wanted Sans";
  }
  .inputWrap {
    width: 70%;
    position: relative;
    input {
      width: 100%;
      padding: 15px;
      &::placeholder {
        font: 500 1.6rem/1.6rem "Wanted Sans";
        color: #dadada;
      }
    }
    .icon {
      position: absolute;
      right: 10px;
      top: 8px;
    }
  }
`;
const KeywordList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  li {
    padding: 1% 1.5%;
    border-radius: 50%;
    background-color: #ffe453;
    font: 500 1.4rem "Wanted Sans";
    &:first-child {
      color: #ff8038;
    }
  }
`;
const LocationList = styled.div`
  display: flex;
  width: 100%;
  height: 193px;
  border: 2px solid #ffe453;
  .keyword {
    width: 16%;
    border-right: solid 1px #d9d9d9;
    padding: 8px 19px;
    font: 500 1.8rem "Wanted Sans";
  }
  ul {
    font: 500 1.4rem "Wanted Sans";
    overflow-y: scroll;
    scrollbar-width: none;
    width: 100%;
    li {
      width: 100%;
      height: 36px;
      display: flex;
      align-items: center;
      padding-left: 19px;
      transition: ease-in-out 0.1s;

      &:hover {
        background-color: #fff5bb;
        transition: ease-in-out 0.1s;
      }
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
          <option value="">서울특별시</option>
          <option value="">인천광역시</option>
          <option value="">부산광역시</option>
          <option value="">대전광역시</option>
        </select>
        <div className="inputWrap">
          <input type="text" placeholder="터미널명을 입력해주세요" />
          <div className="icon">
            <img src="assets/icon/search.png" alt="검색" />
          </div>
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
              <p className="tabTitle">
                <span>인터넷 예매 가능</span>
              </p>
            </Tab>
            <Tab>
              <p className="tabTitle">
                <span>인터넷 예매 불가</span>
              </p>
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
                    <img src="assets/icon/round-trip-orange.png" alt="" />
                  </span>
                </p>
                <p>
                  <span>편도</span>
                  <span>
                    <img src="assets/icon/one-way-blue.png" alt="" />
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
    "강릉시외\n(강원)",
    "강릉시외\n(강원)",
    "강릉시외\n(강원)",
    "강릉시외\n(강원)",
    "강릉시외\n(강원)",
    "경주시외\n(경북)",
    "경주시외\n(경북)",
    "경주시외\n(경북)",
    "경주시외\n(경북)",
    "경주시외\n(경북)",
    "고양종합\n(경기)",
    "고양종합\n(경기)",
    "고양종합\n(경기)",
    "고양종합\n(경기)",
    "고양종합\n(경기)",
    "광주유스퀘어\n(광주)",
    "광주유스퀘어\n(광주)",
    "광주유스퀘어\n(광주)",
    "광주유스퀘어\n(광주)",
    "광주유스퀘어\n(광주)",
  ];

  return (
    <>
      <PC>
        <Wrapper>
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
      </PC>
      <Mobile>
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
        <SearchSecton sectionName={"출발지"} />
      </Mobile>
    </>
  );
}
