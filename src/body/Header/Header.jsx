import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ThemeContext } from "../../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const { theme } = useContext(ThemeContext);
  const Parent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100px;
    justify-content: space-around;
    align-items: center;
    background-color: ${theme === "light" ? "white" : "black"};
    color: ${theme === "light" ? "black" : "white"};
  `;
  const Content = styled.div`
    position: relative;
    display: flex;
    width: 90%;
    justify-content: space-around;
    align-items: center;
  `;
  const Logo = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
  `;
  const Inner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    right: 0px;
    width: 70%;
    a {
      text-decoration: none;
      color: ${theme === "light" ? "black" : "white"};
      margin-left: 10px;
    }
    a.active {
      font-weight: 600;
    }
  `;
  const Line = styled.div`
    position: absolute;
    bottom: 0;
    width: 60%;
    border-bottom: 2px solid ${theme === "light" ? "black" : "white"};
  `;

  return (
    <Parent>
      <Content>
        <Logo>
          <b>Logo</b>
        </Logo>
        <Inner>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/trending">
            <FontAwesomeIcon icon={faFire} style={{ marginRight: "10px" }} />
            Trending
          </NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/join">Join</NavLink>
        </Inner>
      </Content>
      <Line></Line>
    </Parent>
  );
}
