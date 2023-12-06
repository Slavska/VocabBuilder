import {
  BtnBurger,
  BtnBurgerClose,
  BtnLogOut,
  BtnLogOutBurger,
  BurgerPicture,
  MenuHeader,
  ModalDiv,
  NameText,
  NameTextBurger,
  NavWrapper,
  SvgBurger,
  SvgBurgerClose,
  SvgLogOut,
  SvgLogOutBurger,
  SvgUser,
  SvgUserBurger,
  SvgWrapper,
  SvgWrapperBurger,
  WrapBurgerLogOut,
  WrapperHeader,
  WrapperMenu,
  WrapperRight,
} from "./Header.styled";
import { useEffect, useState } from "react";
import Navigation from "../Navigation/Navigation";

import { useAuth } from "../../hooks/useAuth";
import { signOut } from "../../../redux/auth/operations.js";
import { useDispatch } from "react-redux";
import { selectUserName } from "../../../redux/auth/authSelectors";
import { useSelector } from "react-redux";
import icon from "../../images/symbol-defs.svg";
import { useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";
import illustrationTablet1x from "../../images/illustration1xtablet.png";
import illustrationTablet2x from "../../images/illustration2xtablet.png";
import illustrationTablet1xWebp from "../../images/illustration1xtabletWebp.webp";
import illustrationTablet2xWebp from "../../images/illustration2xtabletWebp.webp";

import illustrationMobile1x from "../../images/illustrationBM1xmobile.png";
import illustrationMobile2x from "../../images/illustrationBM2xmobile.png";
import illustrationMobile1xWebp from "../../images/illustrationBM1xmobileWebp.webp";
import illustrationMobile2xWebp from "../../images/illustrationBM2xmobileWebp.webp";

export const Header = () => {
  const { isLoggedIn } = useAuth();
  const [loggedIn, setLoggedIn] = useState(false);
  const dispatch = useDispatch();
  const name = useSelector(selectUserName);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await dispatch(signOut());
      setLoggedIn(false);
      navigate("/login");
    } catch (error) {
      console.error("Failed to sign out:", error);
    }
  };

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setLoggedIn(isLoggedIn);
  }, [isLoggedIn, name]);

  return (
    <div>
      <WrapperHeader>
        <Logo />
        <NavWrapper>
          <Navigation />
        </NavWrapper>
        <ModalDiv>
          <WrapperRight>
            <NameText>{name}</NameText>
            <SvgWrapper>
              <SvgUser>
                <use href={icon + "#icon-user"}></use>
              </SvgUser>
            </SvgWrapper>
            <BtnLogOut onClick={handleLogout}>
              <SvgLogOut>
                <use href={icon + "#icon-exit"}></use>
              </SvgLogOut>
            </BtnLogOut>
            {!isMenuOpen ? (
              <BtnBurger onClick={handleMenuToggle}>
                <SvgBurger>
                  <use href={icon + "#icon-nav"}></use>
                </SvgBurger>
              </BtnBurger>
            ) : null}
          </WrapperRight>
        </ModalDiv>
      </WrapperHeader>
      {isMenuOpen ? (
        <MenuHeader>
          <WrapperMenu>
            <NameTextBurger>{name}</NameTextBurger>
            <SvgWrapperBurger>
              <SvgUserBurger>
                <use href={icon + "#icon-user"}></use>
              </SvgUserBurger>
            </SvgWrapperBurger>
            <BtnBurgerClose onClick={handleMenuToggle}>
              <SvgBurgerClose>
                <use href={icon + "#icon-x"}></use>
              </SvgBurgerClose>
            </BtnBurgerClose>
          </WrapperMenu>
          <WrapBurgerLogOut>
            <BtnLogOutBurger onClick={handleLogout}>
              <SvgLogOutBurger>
                <use href={icon + "#icon-exit"}></use>
              </SvgLogOutBurger>
            </BtnLogOutBurger>
          </WrapBurgerLogOut>
          <Navigation />
          <BurgerPicture>
            <source
              srcSet={illustrationTablet2xWebp}
              type="image/webp"
              media="(min-width: 768px) and (min-resolution: 2dppx)"
            />
            <source
              srcSet={illustrationTablet1xWebp}
              type="image/webp"
              media="(min-width: 768px)"
            />
            <source
              srcSet={illustrationMobile2xWebp}
              type="image/webp"
              media="(max-width: 767px) and (min-resolution: 2dppx)"
            />
            <source
              srcSet={illustrationMobile1xWebp}
              type="image/webp"
              media="(max-width: 767px)"
            />
            <source
              srcSet={illustrationTablet2x}
              media="(min-width: 768px) and (min-resolution: 2dppx)"
            />
            <source srcSet={illustrationTablet1x} media="(min-width: 768px)" />
            <source
              srcSet={illustrationMobile2x}
              media="(max-width: 767px) and (min-resolution: 2dppx)"
            />
            <source srcSet={illustrationMobile1x} media="(max-width: 767px)" />
            <img src={illustrationMobile1x} alt="User" />
          </BurgerPicture>
        </MenuHeader>
      ) : null}
    </div>
  );
};
