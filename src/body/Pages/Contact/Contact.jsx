import React, { useContext } from "react";
import { styled } from "styled-components";
import { useFormik } from "formik";
import { ContactSchema } from "./Schema";
import { ThemeContext } from "../../../context/ThemeContext";
const Parent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;
  background-color: ${({ theme }) =>
    theme === "light" ? "rgba(208, 208, 208, 0.8)" : "rgba(0, 0, 0, 0.9)"};
`;
const Heading = styled.div`
  margin-bottom: 30px;
  h3 {
    color: ${({ theme }) => (theme === "light" ? "black" : "white")};
    font-family: "Instrument Serif", serif;
    font-size: 30px;
  }
`;
const ContactCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) =>
    theme === "light" ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.5)"};
  align-items: center;
  justify-content: center;
  width: 60%;
  height: 100%;
  form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 80%;
    p {
      color: ${({ theme }) => (theme === "light" ? "black" : "white")};
      font-family: "Instrument Serif", serif;
      height: 1em;
      margin-bottom: 0.5em;
    }
    input {
      width: 350px;
      background-color: ${({ theme }) =>
        theme === "light" ? "white" : "black"};
      color: ${({ theme }) => (theme === "light" ? "black" : "white")};
      border: 2px solid
        ${({ theme }) => (theme === "light" ? "black" : "white")};
      border-radius: 10px;
      padding: 15px;
      outline: none;
    }
    textarea {
      width: 350px;
      background-color: ${({ theme }) =>
        theme === "light" ? "white" : "black"};
      color: ${({ theme }) => (theme === "light" ? "black" : "white")};
      border: 2px solid
        ${({ theme }) => (theme === "light" ? "black" : "white")};
      border-radius: 10px;
      padding: 15px;
      outline: none;
      outline: none;
      resize: none;
      height: 100px;
    }
    button {
      font-family: "Instrument Serif", serif;
      background-color: ${({ theme }) =>
        theme === "light" ? "white" : "black"};
      color: ${({ theme }) => (theme === "light" ? "black" : "white")};
      border: 2px solid
        ${({ theme }) => (theme === "light" ? "black" : "white")};
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
  }
`;

const initialValues = {
  fullname: "",
  email: "",
  password: "",
  message: "",
};
export default function Contact() {
  const { theme } = useContext(ThemeContext);
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
    validationSchema: ContactSchema,
    onSubmit: () => {
      resetForm();
    },
  });
  return (
    <>
      <Parent theme={theme}>
        <ContactCard theme={theme}>
          <Heading theme={theme}>
            <h3>Contact Us</h3>
          </Heading>
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Full Name"
              name="fullname"
              value={values.fullname}
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="off"
            />
            <p>
              {errors.fullname && touched.fullname ? errors.fullname : null}
            </p>

            <input
              placeholder="Email"
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="off"
            />
            <p>{errors.email && touched.email ? errors.email : null}</p>

            <input
              placeholder="Password"
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="off"
            />
            <p>
              {errors.password && touched.password ? errors.password : null}
            </p>
            <textarea
              placeholder="Message"
              type="text"
              name="message"
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <p>{errors.message && touched.message ? errors.message : null}</p>
            <button type="submit">Submit</button>
          </form>
        </ContactCard>
      </Parent>
    </>
  );
}
