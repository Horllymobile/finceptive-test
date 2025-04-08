import { Pencil, Trash2 } from "lucide-react";
import { styled } from "styled-components";
import { Button } from "./styles-components";

export const MainDashboardWrapper = styled.section`
  width: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  @media (max-width: 768px) {
    background-color: white;
    height: 100vh;
  }
`;

export const SideNav = styled.section`
  width: 20%;
  background-color: #7000f6;
  height: 100vh;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MainPage = styled.section`
  width: 80%;
  height: 100vh;
  overflow-y: scroll;
  border-top: 1.5px solid #eff0f2;
  padding: 16px 100px 0px 100px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0px 10px 0px 10px;
    margin-top: 30px;
    border-top: none;
    background-color: white;
    height: 100vh;
  }
`;

export const ProfileWrapper = styled.div`
  padding: 28px;
  display: flex;
  column-gap: 10px;
  border-bottom: 1px solid #ffffff1f;
`;

export const ContainerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StatsCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 40px;
    overflow-x: auto;
    white-space: nowrap;
    padding-bottom: 1rem;
  }
`;

export const AvatarWrapper = styled.div`
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
export const AvatarText = styled.div`
  font-size: 16px;
  color: #ffffff;
`;

export const H3 = styled.h3`
  color: #ffffff;
`;

export const TITLE_TEXT = styled.h3`
  color: #020202;
`;

export const H4 = styled.h4`
  color: #ffffff;
  font-size: 14px;
  font-weight: medium;
`;

export const ProfileInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NavItems = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const AddButton = styled(Button)`
  padding: 14px;
  border-radius: 50%;
  background-color: #7000f6;
  color: white;
`;

export const NavItem = styled.div`
  padding: 12px 8px 12px 8px;
  width: 80%;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  justify-content: start;
  column-gap: 10px;
`;

export const TableWrapper = styled.div`
  width: 100%;
  margin-top: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const TableHead = styled.thead`
  width: 100%;
  border-radius: 10px;
  background-color: #f9fafb;
`;

export const TableBody = styled.tbody`
  width: 100%;
`;

export const TABLE = styled.table`
  width: 100%;
`;

export const POST_WRAPPER = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  row-gap: 30px;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const POST_ITEM = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* flex-direction: column; */
`;

export const TR = styled.tr`
  width: 100%;
`;
export const TH = styled.th`
  padding: 20px;
  text-align: left;
  width: 60px;
  font-weight: 400;
  font-size: 14px;
`;

export const TD = styled.th`
  border: 1px solid #f3f4f6;
  padding: 10px;
  text-align: left;
  font-weight: 400;
  font-size: 14px;
`;

export const BADGE = styled.button`
  /* width: 72px; */
  /* height: 28px; */
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 12px;
  padding-right: 12px;
  border-radius: 10px;
`;

export const SUCCESS_BADGE = styled(BADGE)`
  background-color: #e8fff6;
  color: #1ace37;
`;

export const PENDING_BADGE = styled(BADGE)`
  background-color: #fff6ed;
  color: #ea872d;
`;

export const FAILED_BADGE = styled(BADGE)`
  background-color: #fff5f5;
  color: #ff0f00;
`;

export const EDIT_BUTTON = styled(Button)`
  background-color: #f7f7f7;
  padding: 8px;
  /* width: 28px; */
  border-radius: 50%;
`;

export const DELETE_BUTTON = styled(Button)`
  background-color: #fff5f5;
  padding: 8px;
  /* width: 28px; */
  border-radius: 50%;
`;

export const PencilIcon = styled(Pencil)`
  width: 20px;
  color: #515151;
`;

export const TrashIcon = styled(Trash2)`
  width: 20px;
  color: #ff0f00;
`;

export const ActionWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  column-gap: 10px;
  align-items: center;
`;

export const CONTAINER = styled.div``;
export const FILTER_SECTION = styled(CONTAINER)`
  margin-top: 30px;
  display: flex;
  column-gap: 10px;
  justify-content: space-between;
  align-items: center;
`;

export const FILTER_CONTAINER = styled(CONTAINER)`
  display: flex;
  column-gap: 10px;
  justify-content: space-between;
  align-items: center;
`;
