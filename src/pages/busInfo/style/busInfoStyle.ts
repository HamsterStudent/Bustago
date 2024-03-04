import styled from "styled-components";

export const SearchBar = styled.div`
  position: relative;
  input {
    width: 355px;
    float: right;
  }
  &::after {
    content: "";
    position: absolute;
    top: 7px;
    right: 15px;
    width: 24px;
    height: 24px;
    background: url("assets/icon/search.png") no-repeat;
    background-size: contain;
  }
`;
