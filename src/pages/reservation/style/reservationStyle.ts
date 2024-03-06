import styled from "styled-components";

export const Step = styled.ul`
  display: flex;
  justify-content: center;
  height: 40px;
  margin-bottom: 30px;
  font: 700 1.8rem "Wanted Sans";
  li {
    padding: 0 27px;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      margin-right: 10px;
    }
  }
  .stepActive {
    border-radius: 22px;
    background-color: #ffe453;
  }
`;
