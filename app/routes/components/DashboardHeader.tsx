import { styled } from "styled-components";
import { Avatar, Button, Image } from "./styles-components";
import { ChevronDown, CircleHelp, Menu } from "lucide-react";

const Header = styled.section`
  width: 100%;
  padding: 16px 51px 16px 51px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100%;
    padding: 16px 20px 16px 20px;
    /* justify-content: start; */
  }
`;

const ProfileWraper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 18px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ProfileMobile = styled.div`
  display: flex;
  align-items: center;
  column-gap: 18px;

  @media (min-width: 768px) {
    display: none;
  }
`;

const CircleHelpIcon = styled(CircleHelp)`
  color: #6b7180;
  width: 20px;
`;

const Line = styled.div`
  background-color: #6b7180;
  width: 0.5px;
  height: 24px;
`;

const ProfileNameWrapper = styled.div`
  display: flex;
  column-gap: 5px;
`;

const ProfileName = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #6b7180;
`;

const DropDown = styled(ChevronDown)`
  color: #0a090b;
  width: 20px;
`;

const LogoImage = styled(Image)`
  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuIcon = styled(Menu)`
  color: #7000f6;
`;

const MenuButton = styled(Button)`
  background-color: #f7f0ff;
  padding: 5px;
  border-radius: 5px;
  @media (min-width: 768px) {
    display: none;
  }
`;

const MobilePageTitle = styled.h3`
  color: #333333;
  font-size: 20px;
  @media (min-width: 768px) {
    display: none;
  }
`;

export function DashboardHeader() {
  return (
    <>
      <Header>
        <LogoImage src="assets/logo.png"></LogoImage>
        <MenuButton>
          <MenuIcon />
        </MenuButton>

        <MobilePageTitle>Transactions</MobilePageTitle>

        <ProfileWraper>
          <CircleHelpIcon></CircleHelpIcon>
          <Line></Line>
          <Avatar src="assets/Avatar.png"></Avatar>
          <ProfileNameWrapper>
            <ProfileName>Tee</ProfileName>
            <DropDown />
          </ProfileNameWrapper>
        </ProfileWraper>

        <ProfileMobile>
          <Avatar src="assets/Avatar.png"></Avatar>
        </ProfileMobile>
      </Header>
    </>
  );
}
