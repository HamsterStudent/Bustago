import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BusTable } from "../../../shared/style/tableStyle";
import { PageList, SearchBar } from "../../../shared/style/componentStyle";

const TerminalInfoWrap = styled.div`
  width: 100%;
`;

const SelectLocation = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  li {
    width: 12%;
    height: 44px;
    font: 500 1.8rem/3.9rem "Wanted Sans";
    border: solid 2px #e5e5e5;
    border-radius: 9px;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
    &:nth-child(-n + 8) {
      margin-bottom: 0.5%;
    }
    &:hover {
      background-color: #fff5bb;
      border: solid 2px #ffe453;
    }
  }
`;

const MapWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 49px;
`;
const Map = styled.div`
  background-color: plum;
  height: 493px;
  width: 49%;
`;

const TerminalTableWrap = styled.div`
  width: 50%;
`;

const TerminalTable = styled(BusTable)`
  width: 100%;
`;

const TerminalIndex = styled(PageList)`
  width: 50%;
`;
export default function TerminalInfo() {
  const locationData = [
    "서울특별시",
    "인천광역시",
    "부산광역시",
    "대구광역시",
    "광주광역시",
    "대전광역시",
    "울산광역시",
    "세종특별자치시",
    "경기도",
    "강원도",
    "경상북도",
    "경상남도",
    "전라북도",
    "전라남도",
    "충청북도",
    "충청남도",
  ];
  const [mapPoint, setMapPoint] = useState({ x: null, y: null });

  useEffect(() => {
    if (!window.naver) return;
    const mapDiv = document.getElementById("map");
    const map = new window.naver.maps.Map(mapDiv);

    window.naver.maps.Event.addDOMListener(mapDiv, "click", () => {
      const coordinate = { x: map.data.map.center.x, y: map.data.map.center.y };
      setMapPoint({ x: coordinate.x, y: coordinate.y });
    });
  }, []);

  return (
    <TerminalInfoWrap>
      <SelectLocation>
        {locationData.map((x) => {
          return <li>{x}</li>;
        })}
      </SelectLocation>
      <MapWrap>
        <Map id="map">
          <div>{mapPoint.x}</div>
          <div>{mapPoint.y}</div>
        </Map>
        <TerminalTableWrap>
          <SearchBar style={{ marginBottom: "50px" }}>
            <input type="text" placeholder="회사명을 입력해 주세요" />
          </SearchBar>
          <TerminalTable>
            <thead>
              <tr>
                <td>번호</td>
                <td>지역</td>
                <td>터미널명</td>
                <td>주소</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>서울</td>
                <td>가락시장</td>
                <td>서울특별시 성동구 왕십리로 125, 17층</td>
              </tr>
            </tbody>
          </TerminalTable>
          <TerminalIndex>
            <li className="numActive">1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
          </TerminalIndex>
        </TerminalTableWrap>
      </MapWrap>
    </TerminalInfoWrap>
  );
}
