import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  h3 {
    font: 700 1.8rem "Inter";
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  ul {
    display: flex;
    font: 400 14px "Inter";
    li {
      display: flex;
      align-items: center;
    }
  }
`;

const SeatMap = styled.div`
  width: 100%;
  height: 326px;
  border: solid 1px #d9d9d9;
`;

const Notice = styled.div`
  p {
    font: 400 1.4rem/2.3rem "Inter";
  }
`;

const Next = styled.div`
  width: 35%;
  padding: 0 24px;
  border-left: solid 1px #d9d9d9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  div {
    font: 400 2.4rem "Inter";
    margin-bottom: 19px;
    span {
      font-weight: 700;
    }
  }
  button {
    color: #fff;
    font: 600 23px "Inter";
    border: none;
    height: 58px;
    width: 100%;
    border-radius: 28px;
    background: #000;
  }
`;

export default function SelectSeat() {
  return (
    <Wrap>
      <Title>
        <h3>좌석 배치도</h3>
        <ul>
          <li>
            <img src="assets/icon/seat.svg" alt="" />
            예매 가능 좌석
          </li>
          <li>
            <img src="assets/icon/seat_reserved.svg" alt="" />
            예매 완료된 좌석
          </li>
        </ul>
      </Title>
      <SeatMap>
        <div>door</div>
        <ul>
          <li></li>
        </ul>
      </SeatMap>
      <Notice>
        <p>
          - 좌석 1, 2번은 교통약자(장애인, 임산부, 노약자)를 위한 좌석이므로,
          교통약자를 위해 배려해주세요.
          <br />- 선택하신 좌석은 실제 좌석과 상이할 수 있습니다.
        </p>
      </Notice>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "25px",
        }}
      >
        <Notice>
          <h3>배차 선택 시 주의사항</h3>
          <p>
            예매(또는 취소)단계에서 회선장애나 기타 통신장애 발생 시
            예매(취소)여부를 조회를 통해 반드시 직접 확인하셔야 하며,확인하시지
            않으신 경우에 부도위약금이 청구될 수 있으니 유의하시기 바랍니다.
          </p>
          <p>
            소요시간은 참고용이며 도로 및 버스회사의 사정에 따라 변경될 수
            있습니다.
          </p>
          <p>
            미 예매 상태이며 예매시 선택하셨던 좌석은 최소 20분간은 선택 할 수
            없습니다.(이게 무슨말임)
          </p>
          <p>
            예매을 하시려면 다른 좌석으로 선택 또는 최소 20분 후에 좌석을
            선택하시면 됩니다.
          </p>
        </Notice>
        <Next>
          <div>
            <span>2석</span>중 <span>2석</span> 선택
          </div>
          <button>선택하기</button>
        </Next>
      </div>
    </Wrap>
  );
}
