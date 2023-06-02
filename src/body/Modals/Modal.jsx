import React, { useState, useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../context/ThemeContext";

export default function Modal({ children, modalShow, handleModalClick }) {
  const { theme } = useContext(ThemeContext);
  const toggle = "none";

  const Main = styled.div`
    display: ${modalShow ? "flex" : toggle};
    flex-direction: column;
  `;
  const Parent = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(202, 206, 207, 0.8);
  `;
  const ModalCard = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(47, 48, 48, 1);
    height: 400px;
    width: 700px;
    border: 2px solid white;
    color: white;
    border-radius: 20px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4), 0 6px 6px rgba(0, 0, 0, 0.2);
    p {
      width: 80%;
      height: 200px;
      position: fixed;
      top: 35%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    input {
      position: fixed;
      top: 85%;
      left: 38%;
      transform: translate(-50%, -50%);
      width: 350px;
      background-color: ${theme === "light" ? "white" : "black"};
      color: ${theme === "light" ? "black" : "white"};
      border: 2px solid ${theme === "light" ? "black" : "white"};
      border-radius: 10px;
      padding: 15px;
      outline: none;
    }
    button {
      position: fixed;
      top: 85%;
      left: 75%;
      transform: translate(-50%, -50%);
      width: 90px;
      background-color: ${theme === "light" ? "white" : "black"};
      color: ${theme === "light" ? "black" : "white"};
      border: 2px solid ${theme === "light" ? "black" : "white"};
      border-radius: 15px;
      font-size: 16px;
      font-weight: bold;
      padding: 13px 10px;
      margin-left: 10px;
      transition: all 0.2s ease-in-out;
      cursor: pointer;
      &:hover {
        background-color: ${theme === "light" ? "#d1cfcf" : "#212121"};
        color: ${theme === "light" ? "black" : "white"};
        border: 2px solid ${theme === "light" ? "black" : "white"};
      }
    }
  `;
  const Cross = styled.div`
    position: absolute;
    top: 10px;
    right: 20px;
    font-size: xx-large;
    cursor: pointer;
  `;

  return (
    <Main>
      <Parent></Parent>
      <ModalCard>
        <Cross onClick={handleModalClick}>&times;</Cross>
        {children}
      </ModalCard>
    </Main>
  );
}
