import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../../context/ThemeContext";

export default function HomeCards({ children }) {
  const { theme } = useContext(ThemeContext);

  const Parent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 230px;
    height: 230px;
    background-color: ${theme === "light" ? "#ffffff" : "rgba(0, 10, 20, 0.9)"};
    color: ${theme === "light" ? "#222" : "#f0f0f0"};
    box-shadow: 0 5px 15px
      ${theme === "light" ? "rgba(0, 0, 0, 0.5)" : "rgba(255, 255, 255, 0.5)"};
    position: relative;
    margin-top: 100px;
    border-radius: 10px;
    font-family: "Georgia", serif;
    font-size: 18px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    font-style: italic;
    font-weight: 600;
    text-align: center;
    h2 {
      margin-bottom: 20px;
      background-color: ${theme === "light" ? "#000000" : "#ffffff"};
      color: ${theme === "light" ? "#ffffff" : "#000000"};
      width: 100%;
    }
    p {
      width: 80%;
    }

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 10px;
      box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.5);
      z-index: -1;
    }
  `;

  return <Parent>{children}</Parent>;
}
