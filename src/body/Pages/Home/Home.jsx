import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../../context/ThemeContext";
import Modal from "../../Modals/Modal";
import SectionA from "./SectionA/SectionA";
import SectionB from "./SectionB/SectionB";
import SectionC from "./SectionC/SectionC";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  background-color: ${({ theme }) =>
    theme === "light" ? "rgba(208, 208, 208, 0.8)" : "rgba(0, 0, 0, 0.9)"};
  color: ${({ theme }) => (theme === "light" ? "black" : "white")};
`;
export default function Home() {
  const { theme } = useContext(ThemeContext);

  const [modalShow, setModalShow] = useState(false);
  const handleModalClick = (event) => {
    setModalShow(false);
    event.preventDefault();
  };
  useEffect(() => {
    let timer = setTimeout(() => {
      setModalShow(true);
      console.log("hello");
    }, 20000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Main theme={theme}>
      <SectionA />
      <SectionB />
      <SectionC />
      <Modal
        modalShow={modalShow}
        setModalShow={setModalShow}
        handleModalClick={handleModalClick}
      >
        <p>
          Join our newsletter to stay up-to-date with the latest news and
          updates from our platform. As a subscriber, you'll receive exclusive
          insights, special offers, and early access to new features. Our
          newsletter is the best way to keep in touch with our community and to
          learn about upcoming events and promotions. Don't miss out on the
          opportunity to be part of our growing network of businesses and
          customers around the world. Sign up today and start receiving our
          newsletter straight to your inbox!
        </p>
        <div>
          <input placeholder="Enter your Email" />
          <button onClick={handleModalClick}>Submit</button>
        </div>
      </Modal>
    </Main>
  );
}
