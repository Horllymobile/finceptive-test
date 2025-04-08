import { styled } from "styled-components";
import { Button } from "./styles-components";

const StatsCardWrapper = styled.div`
  background-color: #f9f9f9;
  border-radius: 10px;
  width: 300px;
  /* height: 120px; */
  padding: 16px;

  @media (max-width: 768px) {
    width: 250px;
    min-width: 250px;
  }
`;

const P = styled.p`
  color: black;
  font-size: 12px;
`;
const H1 = styled.h1`
  color: black;
  font-size: 32px;
  margin-top: 20px;
`;
const TotalWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
`;
const PercentText = styled.sub`
  color: #7f7d83;
  margin-top: 20px;
  font-size: 13px;
`;

const ViewDetailButton = styled(Button)`
  font-size: 14px;
  margin-top: 5px;
`;

export function StatsCard({
  title,
  amount,
  percentage,
  color,
}: {
  title: string;
  amount: string;
  percentage?: string;
  color: string;
}) {
  return (
    <StatsCardWrapper>
      <P>{title}</P>
      <TotalWrapper>
        <H1>{amount}</H1>
        {percentage && <PercentText>{percentage}</PercentText>}
      </TotalWrapper>
      <ViewDetailButton style={{ color: color }}>View Details</ViewDetailButton>
    </StatsCardWrapper>
  );
}
