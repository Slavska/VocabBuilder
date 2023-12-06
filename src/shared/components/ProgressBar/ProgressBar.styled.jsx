import styled from "styled-components";
import { breakpoints } from "../styles/breakpoints";

const { mobile, tablet, desktop } = breakpoints;

export const ProgressWrap = styled.div`
  position: relative;
  display: flex;

  justify-content: flex-end;
  margin-bottom: 14px;

  @media screen and (min-width: ${tablet}) {
    margin-bottom: 34px;
  }
`;

export const TextInCirc = styled.p`
  position: absolute;
  right: 15px;
  top: 15px;
  display: flex;

  justify-content: flex-end;
  color: #121417;
  width: 100%;
  height: 100%;
  text-align: center;
  font-family: "Regular";
  font-size: 10px;
  line-height: 1.5;
`;
