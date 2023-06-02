import React, { useContext } from "react";
import { styled } from "styled-components";
import SectionA from "./SectionA/SectionA";
import SectionB from "./SectionB/SectionB";

export default function Trending() {
  const Parent = styled.div``;

  return (
    <Parent>
      <SectionA />
      <SectionB />
    </Parent>
  );
}
