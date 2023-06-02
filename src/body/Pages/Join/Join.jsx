import React, { useState, useContext } from "react";
import { styled } from "styled-components";
import { ThemeContext } from "../../../context/ThemeContext";
import Login from "./Login";
import Signup from "./Signup";

const Parent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) =>
    theme === "light" ? "rgba(208, 208, 208, 0.8)" : "rgba(0, 0, 0, 0.9)"};
  min-height: 88vh;
`;

export default function Join() {
  const { theme } = useContext(ThemeContext);
  const [form, setForm] = useState(true);
  console.log(form);
  return (
    <>
      <Parent theme={theme}>
        {form ? (
          <Login form={form} setForm={setForm} />
        ) : (
          <Signup form={form} setForm={setForm} />
        )}
      </Parent>
    </>
  );
}
