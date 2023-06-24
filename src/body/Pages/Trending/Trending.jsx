import React, { useContext } from "react";
import { styled } from "styled-components";
import SectionA from "./SectionA/SectionA";
import SectionB from "./SectionB/SectionB";

const Parent = styled.div``;
export default function Trending() {
  return (
    <Parent>
      <SectionA />
      <SectionB />
    </Parent>
  );
}
