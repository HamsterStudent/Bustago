import styled from "styled-components";

export const BusTable = styled.table`
  width: 100%;
  border-top: 2px solid #ffe453;
  border-bottom: 2px solid #ffe453;
  th,
  td,
  button {
    font: 500 1.4rem "Wanted Sans";
  }
  thead {
    tr {
      width: 100%;
      background-color: #fff5bb;
      height: 43px;
    }
  }
  tbody {
    width: 100%;
    tr {
      border-bottom: solid 1px #e5e5e5;
    }
  }

  tr {
    padding: 13px 0;
    text-align: center;
  }
  th,
  td {
    padding: 13px 0;
  }
  .type {
    background-color: #afc7fc;
    color: #fff;
    text-align: center;
    padding: 5px 7px;
    border-radius: 15px;
    letter-spacing: -2%;
    margin-left: 10px;
    font: 500 1.2rem "Wanted Sans";
  }
  .orange {
    button {
      background-color: #ff8038;
      color: #fff;
      border: none;
      padding: 5px 8px;
      border-radius: 5px;
    }
  }
  .grey {
    button {
      background-color: #aaaaaa;
      color: #fff;
      border: none;
      padding: 5px 8px;
      border-radius: 5px;
    }
  }
`;
