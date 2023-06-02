import React, { useContext } from "react";
import { styled } from "styled-components";
import { Undergarments } from "../../../../DataAPI/DataAPI";
import { ThemeContext } from "../../../../context/ThemeContext";

export default function WatchesMapper() {
  const Underwear = [...Undergarments];
  const { theme } = useContext(ThemeContext);
  const Parent = styled.div`
    height: 380px;
    width: 350px;
    border: none;
    border-radius: 8px;
    margin-left: 10px;
    margin-right: 10px;
    background-color: ${({ theme }) =>
      theme === "light" ? "#ffffff" : "#000000"};
    color: ${theme === "light" ? "#222" : "#f0f0f0"};
    box-shadow: 0 3px 9px
      ${({ theme }) =>
        theme === "light" ? "rgba(143, 143, 143, 0.8)" : "rgba(0, 0, 0, 0.5)"};
    transition: all 0.3s ease-in-out;
    &:hover {
      border-radius: 8px;
      transform: scale(0.9);
    }
  `;
  const Body = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
  `;
  const Image = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 10px;
    img {
      width: 60%;
      height: 200px;
      border-radius: 50%;
      border: 3px solid
        ${({ theme }) => (theme === "light" ? "black" : "darkgrey")};
    }
  `;
  const Details = styled.div`
    width: 350px;
    h3 {
      display: flex;
      justify-content: center;
    }
    h4 {
      display: flex;
      justify-content: center;
    }
    p {
      display: flex;
      justify-content: center;
      font-style: italic;
      font-weight: 600;
    }
  `;
  return (
    <>
      {Underwear.slice(3, 5).map((item) => (
        <Parent key={item.id} theme={theme}>
          <Body>
            <Image>
              <img src={item.image} alt={item.name} />
            </Image>
            <Details>
              <h3>{item.name}</h3>
              <h4>{item.brand}</h4>
              <p>{item.color}</p>
              <p>${item.price}</p>
              <p>{item.gender}</p>
              <p>{item.type}</p>
            </Details>
          </Body>
        </Parent>
      ))}
    </>
  );
}
