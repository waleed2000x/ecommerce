import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../../../context/ThemeContext";
import Shoes from "./ShoeCards";
import Undergarments from "./Undergarments";
import Watches from "./Watches";
import Jeans from "./Jeans";
import Formalshirt from "./FormalShirts";
const Line = styled.div`
  width: 100%;
  height: 20px;
  background-color: ${({ theme }) => (theme === "light" ? "black" : "white")};
`;
const Parent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-image: ${({ theme }) =>
    theme === "light"
      ? `url(
          "https://img.freepik.com/premium-vector/clothes-items-white-background-seamless-pattern-thin-line_48369-13298.jpg?w=1380"
        )`
      : `url(
          "https://as1.ftcdn.net/v2/jpg/00/96/84/04/1000_F_96840400_PbKj1T4lYgKtgl7TfW7snDLLwp3fwNqB.jpg"
        )`};
`;
const Heading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 700px;
  height: 100px;
  font-size: 70px;
  margin-top: 150px;
  background-color: ${({ theme }) =>
    theme === "light" ? "rgba(0, 0, 0, 0.9)" : "rgba(255, 255, 255, 0.7)"};
  P {
    font-family: "Instrument Serif", serif;
    color: ${({ theme }) => (theme === "light" ? "white" : "black")};
  }
`;
const CardContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
`;
export default function SectionB() {
  const { theme } = useContext(ThemeContext);

  return (
    <Parent theme={theme}>
      <Line theme={theme}></Line>
      <Heading theme={theme}>
        <p>Trending Products</p>
      </Heading>
      <CardContainer theme={theme}>
        <Shoes />
        <Undergarments />
        <Watches />
        <Jeans />
        <Formalshirt />
      </CardContainer>
    </Parent>
  );
}
