import React, { useContext } from "react";
import Header from "./Header/Header";
import styled from "styled-components";
import { ThemeContext, themes } from "../context/ThemeContext";
import "../index.css";

export default function Body() {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleTheme = () => {
    setTheme(theme === themes.light ? themes.dark : themes.light);
  };

  const Parent = styled.div`
    position: relative;
  `;

  const ModeLabel = styled.div`
    position: absolute;
    top: 35px;
    right: 100px;
    color: ${theme === "light" ? "black" : "white"};
  `;
  const Toggle = styled.div`
    position: absolute;
    top: 35px;
    right: 50px;

    .switch {
      position: relative;
      display: inline-block;
      width: 40px;
      height: 20px;
    }

    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: black;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }

    .slider:before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      bottom: 1px;
      height: 16px; /* Decreased from 26px */
      width: 16px; /* Decreased from 26px */
      left: 2px; /* Decreased from 4px */
      background-color: white;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }

    input:checked + .slider {
      background-color: white;
      border: 1px solid black;
    }

    input:checked + .slider:before {
      -webkit-transform: translateX(20px); /* Decreased from 26px */
      -ms-transform: translateX(20px); /* Decreased from 26px */
      transform: translateX(19px);
      background-color: black;
    }

    .slider.round {
      border-radius: 20px; /* Decreased from 34px */
      background-color: black;
    }

    .slider.round:before {
      border-radius: 50%;
      background-color: white;
    }
  `;

  return (
    <Parent>
      <ModeLabel>
        <h4>Dark Mode: </h4>
      </ModeLabel>
      <Header />
      <Toggle>
        <label className="switch">
          <input
            type="checkbox"
            checked={theme === themes.dark}
            onChange={handleTheme}
          />
          <span className="slider round"></span>
        </label>
      </Toggle>
    </Parent>
  );
}
