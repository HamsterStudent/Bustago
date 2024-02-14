import React from "react";
import styled from "styled-components";
import { Layout } from "../../shared/style/componentStyle";
import InfoSection from "./components/infoSection";
import { BasicButton, MainSection } from "./style/mainStyle";
import QuickSection from "./components/quickSection";

const BannerSection = styled(MainSection)`
  margin: 130px 0;
  h2 {
    font: 700 3.6rem/4.7rem "Wanted Sans";
    margin-bottom: 20px;
  }
  p {
    font: 500 1.8rem/2.4rem "Wanted Sans";
    margin-bottom: 50px;
  }
`;
const QuickBtn = styled(BasicButton)`
  width: 48%;
  padding: 10px;
  font: 700 1.8rem "Wanted Sans";
  &:last-child {
    background: #000;
  }
`;
export default function Main() {
  return (
    <>
      <InfoSection />
      <BannerSection>
        <Layout>
          <div>
            <h2>
              원하는 목적지의 터미널이
              <br />
              어디인지 모르겠다면?
            </h2>
            <p>
              버스타고에서 지도와 함께 지역별 터미널 위치를 찾아볼 수 있습니다.
            </p>
            <QuickBtn>터미널 찾아보기</QuickBtn>
          </div>
          <div>
            <img src="assets/main/infoBanner.png" alt="" />
          </div>
        </Layout>
      </BannerSection>
      <QuickSection />
    </>
  );
}
