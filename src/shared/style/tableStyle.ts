import styled from "styled-components";

export const BusTable = styled.table`
  width: 100%;
  border: 2px solid #d9d9d9;
  font: 500 16px "Inter";
  thead {
    tr {
      width: 100%;
      background-color: #ededed;
      height: 43px;
    }
  }
  tbody {
    width: 100%;
  }
  tr {
    padding: 13px 0;
    text-align: center;
  }
  th,
  td {
    padding: 13px 0;
  }
`;
