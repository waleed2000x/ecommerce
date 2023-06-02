import React from "react";
import styled from "styled-components";
import { useContext } from "react";
import HomeCards from "../HomeCards";
import { ThemeContext } from "../../../../context/ThemeContext";
import { useFormik } from "formik";
import { HomeInputSchema } from "../Schemas";

const SectionADiv = styled.div`
  width: 70%;
  margin: 110px 150px;
`;
const MainText = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  h3 {
    font-family: "Instrument Serif", serif;
    font-weight: bolder;
    font-size: 100px;
  }
  p {
    font-style: italic;
    margin-top: 30px;
  }
`;
const Cards = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;
const Input = styled.div`
  display: flex;
  margin-top: 100px;
  width: 550px;
  height: 50px;
  input {
    width: 350px;
    background-color: ${({ theme }) => (theme === "light" ? "white" : "black")};
    color: ${({ theme }) => (theme === "light" ? "black" : "white")};
    border: 2px solid ${({ theme }) => (theme === "light" ? "black" : "white")};
    border-radius: 10px;
    padding: 15px;
    outline: none;
  }
  button {
    background-color: ${({ theme }) => (theme === "light" ? "white" : "black")};
    color: ${({ theme }) => (theme === "light" ? "black" : "white")};
    border: 2px solid ${({ theme }) => (theme === "light" ? "black" : "white")};
    border-radius: 15px;
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
const initialValue = {
  email: "",
};
export default function SectionA() {
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: initialValue,
    validationSchema: HomeInputSchema,
    onSubmit: () => {
      resetForm();
    },
  });
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <SectionADiv theme={theme}>
        <MainText theme={theme}>
          <h3>A Global E-commerce Website Application</h3>
          <p>
            <b>
              Build your business with us online and connect to customers around
              the world. Take advantage of our platform to grow your business
              and access a variety of tools and resources. Reach a global
              audience with features such as multilingual support, international
              payment options, and shipping integrations.
            </b>
          </p>
        </MainText>
        <Input theme={theme}>
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Enter your Email Address"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              name="email"
              type="email"
              autoComplete="off"
            />
            <button type="Submit">Start Free Trial</button>
            <p>{errors.email && touched.email ? errors.email : null}</p>
          </form>
        </Input>
        <Cards theme={theme}>
          <HomeCards theme={theme}>
            <h2>2.3k+</h2>
            <p>Clients & Customers trusts us.</p>
          </HomeCards>
          <HomeCards theme={theme}>
            <h2>1 Million</h2>
            <p>Sales happen at our platform on a daily basis.</p>
          </HomeCards>
        </Cards>
      </SectionADiv>
    </>
  );
}
