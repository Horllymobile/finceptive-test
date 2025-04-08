import { styled } from "styled-components";
import { ListFilter, Plus } from "lucide-react";

export const Wraper = styled.section`
  width: 100%;
  background: #ffffff;
  height: 100vh;
`;

export const MainWraper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  background: #ffffff;
`;

export const RightIntroWraper = styled.section`
  width: 40%;
  padding: 2em;
  background: #f8f2dc;
  height: 100vh;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const PhoneWraper = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: end;
`;

export const RegisterWraper = styled.section`
  width: 60%;
  background: #ffffff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: start;
  }
`;

export const Image = styled.img`
  justify-self: baseline;
`;

export const PhoneImage = styled(Image)`
  justify-self: baseline;
  height: 625.82px;
  place-content: bottom;
`;

export const FormWraper = styled.form`
  width: 335px;
  height: 348px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  row-gap: 40px;

  @media (max-width: 768px) {
    padding-top: 64px;
  }
`;
export const TitleLarge = styled.h1`
  color: black;
  font-size: 40px;

  @media (max-width: 768px) {
    font-size: 24px;
    font-weight: 500;
  }
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

export const Label = styled.label`
  color: black;
`;

export const Sup = styled.sup`
  color: #dc2626;
`;

export const Input = styled.input`
  padding: 8px 12px 8px 12px;
  color: black;
  outline: none;
  border-radius: 5px;
  border: 1px solid #e4e4e7;
`;

export const SearchInput = styled(Input)`
  width: 300px;
`;

export const Button = styled.button``;

export const FlatButton = styled(Button)`
  width: 100%;
  color: #ffffff;
  padding: 8px 16px 8px 16px;
  border-radius: 6px;
  background-color: #7000f6;
`;

export const FilterButton = styled(Button)`
  border: 1px solid #e4e4e7;
  display: flex;
  column-gap: 10px;
  padding: 8px;
  border-radius: 6px;
`;

export const PAGINATION = styled.div`
  border: 1px solid #e4e4e7;
  display: flex;
  column-gap: 5px;
  padding: 8px;
  border-radius: 6px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const PAGINATION_CONTAINER = styled.div`
  display: flex;
  column-gap: 10px;
  align-items: center;
  justify-content: start;
`;

export const FilterIcon = styled(ListFilter)`
  color: black;
  width: 18px;
`;

export const Avatar = styled(Image)`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

export const MobileLogo = styled(Image)`
  padding-top: 56px;
  padding-left: 24px;
  align-self: baseline;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const ParagraphText = styled.p`
  font-size: 14px;
  color: #7f7d83;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 12px;
`;

export const StyledIcon = styled.div`
  color: #ffffffb8;
  display: flex;
  align-items: center;
  justify-content: center;
  /* You can add more shared styles here */
`;

export const AddIcon = styled(Plus)`
  color: #ffffffb8;
`;

export const NavText = styled.div`
  color: #ffffffb8;
`;
