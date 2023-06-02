import styled from "styled-components";
import React, { useContext } from "react";
import { ThemeContext } from "../../../../context/ThemeContext";
import ItemCards from "./ItemCards";

export default function SectionB() {
  const { theme } = useContext(ThemeContext);

  const SectionB = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 80vh;
    margin-top: 100px;
  `;
  const HeadingTitle = styled.div`
    h3 {
      display: flex;
      justify-content: center;
      font-family: "Instrument Serif", serif;
      font-weight: 600;
      font-size: 70px;
    }
  `;
  const Trail1 = styled.div`
    display: flex;
    align-items: center;
    min-height: 400px;
    overflow-x: auto;
    white-space: nowrap;
    margin-top: 90px;
    background-color: rgba(0, 10, 20, 0.9);
    color: ${({ theme }) => (theme === "light" ? "#f0f0f0" : "#222")};
    box-shadow: 0 5px 15px
      ${({ theme }) => (theme === "light" ? "rgba(0, 0, 0, 0.5)" : null)};
  `;

  return (
    <SectionB theme={theme}>
      <HeadingTitle>
        <h3>Some of our Favourites</h3>
      </HeadingTitle>
      <Trail1>
        <ItemCards />
      </Trail1>
    </SectionB>
  );
}
