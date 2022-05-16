import React from "react";
import {
  IconContainer,
  HeaderLogo,
  HeaderLogoContainer,
  HeaderLogoDescription,
} from "./Header";
import { FaHome } from "react-icons/fa";
import { FcContacts } from "react-icons/fc";
import { MdRestaurantMenu } from "react-icons/md";
import styles from "styled-components";

const HeaderContainer = styles.div`
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center
`;
const Header = () => {
  return (
    <>
      <HeaderContainer>
        <HeaderLogoContainer>
          <HeaderLogo>XING ZHENG</HeaderLogo>
          <HeaderLogoDescription>...serving you chinese <MdRestaurantMenu /></HeaderLogoDescription>
        </HeaderLogoContainer>
        <IconContainer>
          <FaHome />
          <FcContacts />
        </IconContainer>
      </HeaderContainer>
    </>
  );
};

export default Header;
