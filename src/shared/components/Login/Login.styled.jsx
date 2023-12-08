import { Field, Form } from "formik";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { breakpoints } from "../styles/breakpoints";

export const WrapperForm = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (min-width: ${breakpoints.tablet}) {
    padding: 144px 0 0 0;
  }
  @media screen and (min-width: ${breakpoints.desktop}) {
    padding: 219px 0;
  }
`;

export const AuthWrapComponent = styled.div`
  padding: 24px 12px;
  background: rgba(133, 170, 159, 0.1);
  border-radius: 30px;
  @media screen and (min-width: ${breakpoints.mobile}) {
    max-width: 628px;
    padding: 32px 16px;
  }

  @media screen and (min-width: ${breakpoints.tablet}) {
    width: 628px;
    padding: 48px 64px;
  }
`;

export const Title = styled.h1`
  color: #121417;
  font-family: "Bold";
  font-size: 40px;
  line-height: 1.2;
  letter-spacing: -0.8px;
  width: 240px;

  @media screen and (min-width: ${breakpoints.mobile}) {
    width: auto;
  }

  @media screen and (min-width: ${breakpoints.tablet}) {
    margin-bottom: 20px;
  }
`;

export const TitleText = styled.p`
  color: rgba(18, 20, 23, 0.8);
  font-size: 20px;
  line-height: 1.5;
  margin-bottom: 16px;
  width: 240px;

  @media screen and (min-width: ${breakpoints.mobile}) {
    width: auto;
  }
  @media screen and (min-width: ${breakpoints.tablet}) {
    margin-bottom: 32px;
  }
`;

export const StyledFormAuth = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: ${breakpoints.tablet}) {
    align-items: start;
  }
`;

export const StyledWrapInputAuth = styled.div`
  position: relative;
`;

export const StyledInputAuth = styled(Field)`
  border-radius: 15px;
  border: 1px solid rgba(18, 20, 23, 0.1);
  margin-bottom: 18px;
  &.no-bottom-padding {
    margin-bottom: 0;
  }
  outline: none;
  transition: all 250ms linear;
  background: transparent;
  color: #121417;
  width: calc(100vw - 48px);
  max-width: 500px;
  line-height: 1.5;
  padding: 16px 40px 16px 18px;
  &::placeholder {
    font-family: "Regular";
    color: #121417;
    line-height: 1.5;
  }
  &:hover,
  &:focus {
    border: 1px solid #85aa9f;
    outline: none;
    opacity: 1;
    transition: outline 250ms linear, opacity 250ms linear;
  }
  @media screen and (min-width: ${breakpoints.tablet}) {
    width: 500px;
  }
`;

export const StyledLabelAuth = styled.span`
  position: absolute;
  top: 20px;
  left: 0;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.21;
  letter-spacing: 0.04em;
  color: black;
  pointer-events: none;
  transition: all 250ms linear;
`;

export const StyledErrorAuth = styled.div`
  position: absolute;
  top: 50px;
  left: 5px;
  font-size: 10px;
  font-weight: 400;
  color: #9dc888;
  transition: all 250ms linear;
`;

export const AuthFormPasswordIcon = styled.span`
  position: absolute;
  bottom: 10px;
  right: 18px;
  cursor: pointer;
`;

export const StyledEyeIcon = styled.svg`
  transition: color 0.3s;
  width: 20px;
  height: 20px;
  stroke: rgba(18, 20, 23, 1);
  fill: transparent;
`;

export const StyledEyeIconVis = styled.svg`
  transition: color 0.3s;
  width: 20px;
  height: 20px;
  stroke: rgba(18, 20, 23, 1);
  fill: transparent;
`;

export const StyledWrapAuthBtn = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
  }
`;

export const StyledBtnAuthAccent = styled.button`
  display: flex;
  transition: background-color 250ms linear;
  font-family: "Bold";
  border-radius: 30px;
  background: #85aa9f;
  padding: 16px 0;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  margin-top: 32px;
  line-height: 1.55;
  border: none;
  min-width: 280px;
  transition: all 250ms linear;
  color: rgba(252, 252, 252, 1);
  &:hover,
  &:focus {
    background: #a5c0b8;
  }
  @media screen and (min-width: ${breakpoints.tablet}) {
    width: 500px;
  }
`;

export const LinkItem = styled(NavLink)`
  color: rgba(18, 20, 23, 0.5);
  font-family: "Bold";
  font-size: 16px;
  line-height: 1.5;
  text-decoration: underline;
  transition: all 250ms linear;
  margin-top: 16px;
  margin-left: auto;
  margin-right: auto;
  &:hover,
  &:focus {
    color: rgba(18, 20, 23, 1);
  }
`;
