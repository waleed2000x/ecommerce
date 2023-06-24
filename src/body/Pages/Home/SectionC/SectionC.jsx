import React, { useContext } from "react";
import { styled } from "styled-components";
import { ThemeContext } from "../../../../context/ThemeContext";

const Parent = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  margin-top: 40px;
`;
const Heading = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  font-family: "Instrument Serif", serif;
  font-weight: 600;
  font-size: 50px;
  text-align: center;
`;
const CardTrail = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 350px;
  margin-top: 150px;
  background-color: ${({ theme }) =>
    theme === "light" ? "#f0f0f0" : "rgba(0, 10, 20, 1)"};
  color: ${({ theme }) => (theme === "light" ? "#f0f0f0" : "#222")};
  box-shadow: 0 5px 5px
    ${({ theme }) =>
      theme === "light" ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, 0.5)"};
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 300px;
  align-items: center;
  background-color: ${({ theme }) => (theme === "light" ? "white" : "black")};
  color: ${({ theme }) => (theme === "light" ? "black" : "white")};
  border: 2px solid ${({ theme }) => (theme === "light" ? "black" : "white")};
  border-radius: 10px;
`;
const Image = styled.div`
  border-radius: 50%;
  border: 1px red;
  height: 200px;
  width: 200px;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  margin-top: 20px;

  img {
    height: 100%;
    width: 100%;
  }

  &:hover {
    transform: scale(1.1);
  }
`;
const Name = styled.div`
  display: flex;
  margin-top: 20px;
  font-size: 40px;
`;
export default function SectionC() {
  const theme = useContext(ThemeContext);
  return (
    <Parent theme={theme}>
      <Heading theme={theme}>Our Trusted Partners</Heading>
      <CardTrail theme={theme}>
        <Card theme={theme}>
          <Image theme={theme}>
            <a href="https://www.daraz.pk/" target="_blank">
              <img
                alt="Daraz"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXzVV_CmkADZFGW470yohqgp2Nx0a9L1AN4Y1LpDBf8l_P_-13o_CWqGBeH7JfXa5OwmY&usqp=CAU"
              />
            </a>
          </Image>
          <Name theme={theme}>Daraz</Name>
        </Card>

        <Card theme={theme}>
          <Image theme={theme}>
            <a href="https://www.alibaba.com/" target="_blank">
              <img
                alt="alibaba"
                src="https://w7.pngwing.com/pngs/653/102/png-transparent-alibaba-round-logo-tech-companies-thumbnail.png"
              />
            </a>
          </Image>
          <Name theme={theme}>Alibaba</Name>
        </Card>

        <Card theme={theme}>
          <Image theme={theme}>
            <a href="https://www.sephora.com/" target="_blank">
              <img
                alt="sephora"
                src="https://logosandtypes.com/wp-content/uploads/2021/02/Sephora.png"
              />
            </a>
          </Image>
          <Name theme={theme}>Sephora</Name>
        </Card>
      </CardTrail>
    </Parent>
  );
}
