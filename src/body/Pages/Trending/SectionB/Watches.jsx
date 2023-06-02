import React, { useContext } from "react";
import { ThemeContext } from "../../../../context/ThemeContext";
import { styled } from "styled-components";
import { Watches } from "../../../../DataAPI/DataAPI";

export default function Underwear() {
  const { theme } = useContext(ThemeContext);

  const Watch = [...Watches];
  const Parent = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
  `;
  const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    height: 400px;
    margin-top: 50px;
    border: 5px solid ${theme === "light" ? "black" : "white"};
    border-radius: 10px;
    background-color: ${theme === "light"
      ? "rgba(0, 0, 0, 0.9)"
      : "rgba(255, 255, 255, 0.9)"};
    color: ${theme === "light" ? "white" : "black"};
  `;
  const Image = styled.div`
    display: flex;
    justify-content: center;
    border-radius: 50%;
    margin-top: 20px;
    border: 2px solid ${theme === "light" ? "white" : "black"};
    width: 200px;
    height: 200px;
    img {
      width: 200px;
      height: 200px;
      border-radius: 50%;
    }
  `;
  const Details = styled.div`
    margin-top: 20px;
    text-align: center;
    h1 {
      font-size: larger;
    }
    h6 {
      width: 390px;
      text-align: end;
      font-size: small;
      color: cadetblue;
    }
  `;

  return (
    <Parent>
      {Watch.slice(0, 3).map((items) => (
        <Card key={items.id}>
          <Image>
            <img src={items.image} alt={items.name} />
          </Image>
          <Details>
            <h1>{items.name}</h1>
            <h5>{items.color}</h5>
            <p>${items.price}</p>
            <p>{items.manufactured}</p>
            <p>{items.gender}</p>
            <h6>{items.type}</h6>
          </Details>
        </Card>
      ))}
    </Parent>
  );
}
