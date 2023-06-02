import React, { useContext } from "react";
import { useFormik } from "formik";
import styled from "styled-components";
import { ThemeContext } from "../../../context/ThemeContext";
import { JoinLoginSchema } from "./Schema";
const Parent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  height: 450px;
  border-radius: 10px;
  background-color: ${({ theme }) =>
    theme === "light" ? "rgba(0, 0, 0, 0.5)" : "rgba(255, 255, 255, 0.5)"};
  h2 {
    margin-top: 50px;
    color: ${({ theme }) => (theme === "light" ? "black" : "white")};
    font-family: "Instrument Serif", serif;
    font-weight: 600;
    font-size: xx-large;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-top: 50px;
  }
  input {
    padding: 15px;
    border: none;
    border-radius: 8px;
    outline: none;
  }
  p {
    font-family: "Instrument Serif", serif;
    height: 1em;
    font-size: 12px;
    margin-bottom: 2em;
    margin-left: 10px;
  }
`;
const Button = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 20px;
  button {
    font-family: "Instrument Serif", serif;
    background-color: ${({ theme }) => (theme === "light" ? "white" : "black")};
    color: ${({ theme }) => (theme === "light" ? "black" : "white")};
    border: 2px solid ${({ theme }) => (theme === "light" ? "black" : "white")};
    border-radius: 15px;
    width: 100px;
    font-size: 16px;
    font-weight: bold;
    padding: 13px 10px;
    margin-left: 10px;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
      background-color: ${({ theme }) =>
        theme === "light" ? "#d1cfcf" : "#212121"};
      color: ${({ theme }) => (theme === "light" ? "black" : "white")};
      border: 2px solid
        ${({ theme }) => (theme === "light" ? "black" : "white")};
    }
  }
`;
const Switch = styled.div`
  font-family: "Instrument Serif", serif;
  button {
    margin-left: 6px;
    font-style: italic;
    font-size: large;
    font-family: "Instrument Serif", serif;
    background-color: ${({ theme }) =>
      theme === "light" ? "rgba(0, 0, 0, 0.01)" : "rgba(255, 255, 255, 0.01)"};
    border: none;
  }
`;

const initialValues = {
  email: "",
  password: "",
};
export default function Login({ form, setForm }) {
  const handleClick = (event) => {
    setForm(!form);
    event.preventDefault();
  };
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: JoinLoginSchema,
    onSubmit: () => {
      resetForm();
    },
  });
  const { theme } = useContext(ThemeContext);
  return (
    <Parent theme={theme}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} theme={theme}>
        <input
          placeholder="Email"
          value={values.email}
          name="email"
          type="email"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <p>{errors.email && touched.email ? errors.email : null}</p>
        <input
          placeholder="Password"
          value={values.password}
          name="password"
          type="password"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <p>{errors.password && touched.password ? errors.password : null}</p>
        <Button>
          <button type="submit">Login</button>
        </Button>
      </form>
      <Switch theme={theme}>
        Don't have an account! <button onClick={handleClick}>Signup</button>
      </Switch>
    </Parent>
  );
}
