import React, { useContext, useState } from "react";
import { styled } from "styled-components";
import { ThemeContext } from "../../../context/ThemeContext";
import { Watches } from "../../../DataAPI/DataAPI";

const Main = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
  min-height: 100vh;
`;
const InputSearch = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  height: 100px;
  margin-top: 5px;
  input {
    width: 280px;
    height: 40px;
    outline: none;
    border: 1px solid ${({ theme }) => (theme === "light" ? "black" : "white")};
    border-radius: 8px;
    background-color: ${({ theme }) => (theme === "light" ? "white" : "black")};
    color: ${({ theme }) => (theme === "light" ? "black" : "white")};
  }
`;
const Parent = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% / 3);
  max-width: 100%;
`;
const Card = styled.div`
  width: 300px;
  height: 400px;
  border-radius: 10px;
  box-shadow: 5px 5px 10px black;
  border: 3px solid black;
  margin: 60px;
`;
const Image = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 100%;
    height: 200px;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
  }
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 200px;
  background-color: ${({ theme }) =>
    theme === "light" ? "rgba(255,255,255, 0.5)" : "rgba(0, 0, 0, 0.9)"};
  color: ${({ theme }) => (theme === "light" ? "black" : "white")};
  h1 {
    text-align: center;
  }
  p {
    margin-top: 7px;
  }
  h6 {
    color: cadetblue;
    position: absolute;
    bottom: 0;
    right: 10px;
    display: flex;
    width: 90%;
    justify-content: end;
    font-size: 15px;
  }
`;
const ProductSearch = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  width: 100%;
  height: 100px;
  margin-top: 5px;
`;
const RadioGroup = styled.div`
  display: flex;
  justify-content: space-around;

  width: 400px;
  label {
    display: flex;
    align-items: center;
  }
  input[type="radio"] {
    margin-right: 5px;
    vertical-align: middle;
  }
  p {
    margin-left: 5px;
    margin-bottom: 0;
    vertical-align: middle;
  }
`;
export default function Clothing() {
  const { theme } = useContext(ThemeContext);
  const [input, setInput] = useState("");
  const [selectedGender, setSelectedGender] = useState("none");
  const handleInput = (e) => setInput(e.target.value);
  const AllData = [...Watches];
  let Data = AllData.filter(
    (item) =>
      item.name.toLowerCase().includes(input.toLowerCase()) &&
      (selectedGender === "none" || selectedGender === item.gender)
  );
  let noItems = (
    <p style={{ color: "darkgray" }}>No items matched your search...</p>
  );

  return (
    <Main theme={theme}>
      <ProductSearch theme={theme}>
        <RadioGroup theme={theme}>
          <label>
            <input
              type="radio"
              value="none"
              checked={selectedGender === "none"}
              onChange={() => setSelectedGender("none")}
            />
            <p>None</p>
          </label>
          <label>
            <input
              type="radio"
              value="male"
              checked={selectedGender === "Men"}
              onChange={() => setSelectedGender("Men")}
            />
            <p>Male</p>
          </label>
          <label>
            <input
              type="radio"
              value="female"
              checked={selectedGender === "Women"}
              onChange={() => setSelectedGender("Women")}
            />
            <p>Female</p>
          </label>
        </RadioGroup>
        <InputSearch theme={theme}>
          <input
            placeholder="Search items.."
            value={input}
            onChange={handleInput}
          />
        </InputSearch>
      </ProductSearch>

      {Data.length === 0
        ? noItems
        : Data.map((item, index) => (
            <Parent key={index} theme={theme}>
              <Card theme={theme}>
                <Image theme={theme}>
                  <img src={item.image} alt={item.brand} />
                </Image>
                <Details theme={theme}>
                  <h3>{item.name}</h3>
                  <p>{item.brand}</p>
                  <p>{item.manufactured}</p>
                  <p>{item.category}</p>
                  <p>{item.gender}</p>
                  <p>Skin: {item.skinType}</p>
                  <p>{item.type}</p>
                  <h6>${item.price}</h6>
                </Details>
              </Card>
            </Parent>
          ))}
    </Main>
  );
}
