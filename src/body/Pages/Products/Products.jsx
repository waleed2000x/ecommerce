import React, { useContext } from "react";
import { styled } from "styled-components";
import { ThemeContext } from "../../../context/ThemeContext";
import { NavLink, Outlet } from "react-router-dom";

const Parent = styled.div`
  display: flex;
  width: 100%;
  background-color: ${({ theme }) =>
    theme === "light" ? "rgba(208, 208, 208, 0.8)" : "rgba(0, 0, 0, 0.9)"};
`;

const MainBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 400px;
  color: ${({ theme }) => (theme === "light" ? "black" : "white")};
  p {
    font-family: "Instrument Serif", serif;
    font-size: 70px;
    margin-left: 100px;
  }
  h5 {
    font-family: "Instrument Serif", serif;
    margin-left: 200px;
    font-size: 100px;
  }
`;

const Navbar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => (theme === "light" ? "black" : "white")};
  a {
    color: ${({ theme }) => (theme === "light" ? "white" : "black")};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  a.active {
    font-weight: bold;
  }
`;

const Container = styled.div`
  width: 100%;
`;

export default function Products() {
  const { theme } = useContext(ThemeContext);

  return (
    <Parent theme={theme}>
      <MainBody>
        <Heading theme={theme}>
          <p>Manage Your </p>
          <h5>Day to Day</h5>
        </Heading>

        <Navbar theme={theme}>
          <NavLink to="/products">Clothing</NavLink>
          <NavLink to="/products/beauty"> Beauty</NavLink>
          <NavLink to="/products/digital">Digital</NavLink>
          <NavLink to="/products/accsesories">Accessories</NavLink>
          <NavLink to="/products/furniture">Furniture</NavLink>
          <NavLink to="/products/health">Health</NavLink>
        </Navbar>
        <Container>
          <Outlet />
        </Container>
      </MainBody>
    </Parent>
  );
}
