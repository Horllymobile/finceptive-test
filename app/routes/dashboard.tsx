import { styled } from "styled-components";
import { DashboardHeader } from "./components/DashboardHeader";
import {
  AddIcon,
  BillPaymentIcon,
  Button,
  ComplianceIcon,
  DepositsIcon,
  FilesIcon,
  NavText,
  ParagraphText,
  ReportsIcon,
  RocketIcon,
  SavingsIcon,
  SettingsIcon,
  TitleLarge,
  TransfersIcon,
  UsersIcon,
  Wraper,
} from "./components/styles-components";
import { StatsCard } from "./components/StatsCard";

const MainDashboardWrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const SideNav = styled.section`
  width: 20%;
  /* height: 100vh; */
  background-color: #7000f6;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MainPage = styled.section`
  width: 80%;
  height: 100vh;
  border-top: 1.5px solid #eff0f2;
  padding: 16px 100px 0px 100px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0px 10px 0px 10px;
    margin-top: 30px;
    border-top: none;
  }
`;

const ProfileWrapper = styled.div`
  padding: 28px;
  display: flex;
  column-gap: 10px;
  border-bottom: 1px solid #ffffff1f;
`;

const ContainerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StatsCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: "50px";
`;

const AvatarWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  padding: 8px;
  background-color: #ffffff1f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const AvatarText = styled.div`
  font-size: 16px;
  color: #ffffff;
`;

const H3 = styled.h3`
  color: #ffffff;
`;

const H4 = styled.h4`
  color: #ffffff;
  font-size: 14px;
  font-weight: medium;
`;

const ProfileInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const NavItems = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const AddButton = styled(Button)`
  padding: 14px;
  border-radius: 50%;
  background-color: #7000f6;
  color: white;
`;

const NavItem = styled.div`
  padding: 12px 8px 12px 8px;
  width: 80%;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  justify-content: start;
  column-gap: 10px;
`;

const TableWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
`;

const TableHead = styled.thead`
  width: 100%;
  border-radius: 10px;
  background-color: #f9fafb;
`;

const TableBody = styled.tbody`
  width: 100%;
`;

const TABLE = styled.table`
  width: 100%;
`;

const TR = styled.tr`
  width: 100%;
`;
const TH = styled.th`
  padding: 20px;
  width: 60px;
  font-weight: 400;
  font-size: 14px;
`;

const TD = styled.th`
  padding: 20px;
  width: 60px;
  font-weight: 400;
  font-size: 14px;
`;

const navs = [
  {
    name: "Overview",
    active: false,
    icon: RocketIcon,
  },
  {
    name: "Users",
    active: false,
    icon: UsersIcon,
  },
  {
    name: "Posts",
    active: true,
    icon: FilesIcon,
  },
  {
    name: "Transfters",
    active: false,
    icon: TransfersIcon,
  },
  {
    name: "Deposits",
    active: false,
    icon: DepositsIcon,
  },
  {
    name: "Savings",
    active: false,
    icon: SavingsIcon,
  },
  {
    name: "Bill Payments",
    active: false,
    icon: BillPaymentIcon,
  },
  {
    name: "Reports",
    active: false,
    icon: ReportsIcon,
  },
  {
    name: "Compliance",
    active: false,
    icon: ComplianceIcon,
  },
  {
    name: "Settings",
    active: false,
    icon: SettingsIcon,
  },
];

export default function Dashboard() {
  return (
    <Wraper>
      <DashboardHeader></DashboardHeader>
      <MainDashboardWrapper>
        <SideNav>
          <ProfileWrapper>
            <AvatarWrapper>
              <AvatarText>TU</AvatarText>
            </AvatarWrapper>
            <ProfileInfoWrapper>
              <H3>Test User</H3>
              <H4>test@user.com</H4>
            </ProfileInfoWrapper>
          </ProfileWrapper>

          <NavItems>
            {navs.map((nav) => (
              <NavItem
                key={nav.name}
                className={`${nav.active ? "active" : ""}`}
              >
                <nav.icon></nav.icon>
                <NavText>{nav.name}</NavText>
              </NavItem>
            ))}
          </NavItems>
        </SideNav>
        <MainPage>
          <ContainerWrapper>
            <div>
              <TitleLarge>Post Metrics</TitleLarge>
              <ParagraphText>View all your post metrics here </ParagraphText>
            </div>

            <AddButton>
              <AddIcon></AddIcon>
            </AddButton>
          </ContainerWrapper>

          <StatsCardWrapper>
            <StatsCard
              title="Total Post"
              amount="139,000"
              percentage="+1 today"
              color="#7000F6"
            ></StatsCard>

            <StatsCard
              title="Total Successful Post"
              amount="89,120"
              percentage=""
              color="#008000"
            ></StatsCard>

            <StatsCard
              title="Total Failed Post"
              amount="12,100"
              percentage="+5% today"
              color="#FF0000"
            ></StatsCard>
          </StatsCardWrapper>

          <TableWrapper>
            <TABLE>
              <TableHead>
                <TR>
                  <TH>Body Content</TH>
                  <TH>Title</TH>
                  <TH>Post ID</TH>
                  <TH>User</TH>
                  <TH>Status</TH>
                  <TH>Action</TH>
                </TR>
              </TableHead>
              <TableBody>
                <TR>
                  <TD>Body Content</TD>
                  <TD>Title</TD>
                  <TD>Post ID</TD>
                  <TD>User</TD>
                  <TD>Status</TD>
                  <TD>Action</TD>
                </TR>
              </TableBody>
            </TABLE>
          </TableWrapper>
        </MainPage>
      </MainDashboardWrapper>
    </Wraper>
  );
}
