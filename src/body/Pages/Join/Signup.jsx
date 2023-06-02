import React, { useContext } from "react";
import { useFormik } from "formik";
import styled from "styled-components";
import { ThemeContext } from "../../../context/ThemeContext";
import { JoinSignupSchema } from "./Schema";
const Parent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 700px;
  height: 550px;
  border-radius: 10px;
  background-color: ${({ theme }) =>
    theme === "light" ? "rgba(0, 0, 0, 0.5)" : "rgba(255, 255, 255, 0.2)"};
  h2 {
    margin-top: 20px;
    color: ${({ theme }) => (theme === "light" ? "black" : "white")};
    font-family: "Instrument Serif", serif;
    font-weight: 600;
    font-size: 40px;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-top: 50px;
  }
  input {
    padding: 15px;
    /* border: 2px solid ${({ theme }) =>
      theme === "light" ? "black" : "white"}; */
    border: none;
    background-color: ${({ theme }) =>
      theme === "light" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.3)"};
    border-radius: 8px;
    outline: none;
    margin: 10px;
  }
  p {
    font-family: "Instrument Serif", serif;
    height: 1em;
    font-size: 12px;
    margin-bottom: 2em;
    margin-left: 15px;
  }
`;
const InputGroup = styled.div`
  display: flex;
`;
const Input = styled.div`
  display: flex;
  flex-direction: column;
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
const initialValues = {
  fname: "",
  lname: "",
  email: "",
  password: "",
  confirm_password: "",
  address: "",
};
export default function Signup({ form, setForm }) {
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
    validationSchema: JoinSignupSchema,
    onSubmit: () => {
      resetForm();
    },
  });
  const { theme } = useContext(ThemeContext);
  return (
    <Parent theme={theme}>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit} theme={theme}>
        <InputGroup>
          <Input>
            <input
              placeholder="First Name"
              value={values.fname}
              name="fname"
              type="fname"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <p>{errors.fname && touched.fname ? errors.fname : null}</p>
          </Input>
          <Input>
            <input
              placeholder="Last Nname"
              value={values.lname}
              name="lname"
              type="lname"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <p>{errors.lname && touched.lname ? errors.lname : null}</p>
          </Input>
        </InputGroup>
        <InputGroup>
          <Input>
            <input
              placeholder="Email"
              value={values.email}
              name="email"
              type="email"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <p>{errors.email && touched.email ? errors.email : null}</p>
          </Input>
          <Input>
            <input
              placeholder="Address"
              value={values.address}
              name="address"
              type="address"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <p>{errors.address && touched.address ? errors.address : null}</p>
          </Input>
        </InputGroup>
        <InputGroup>
          <Input>
            <input
              placeholder="Password"
              value={values.password}
              name="password"
              type="password"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <p>
              {errors.password && touched.password ? errors.password : null}
            </p>
          </Input>
          <Input>
            <input
              placeholder="Confirm Password"
              value={values.confirm_password}
              name="confirm_password"
              type="confirm_password"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <p>
              {errors.confirm_password && touched.confirm_password
                ? errors.confirm_password
                : null}
            </p>
          </Input>
        </InputGroup>
        <Button>
          <button type="submit">Login</button>
        </Button>
      </form>
      <Switch theme={theme}>
        Already have an account! <button onClick={handleClick}>Login</button>
      </Switch>
    </Parent>
  );
}
