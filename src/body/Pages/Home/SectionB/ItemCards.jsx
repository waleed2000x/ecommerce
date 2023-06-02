import React from "react";
import ShoesMapper from "./ShoesMapper";
import JeansMapper from "./JeansMapper";
import WatchesMapper from "./WatchesMapper";
import UnderwearMapper from "./UnderwearMapper";
export default function ItemCards() {
  return (
    <>
      <WatchesMapper />
      <ShoesMapper />
      <JeansMapper />
      <UnderwearMapper />
    </>
  );
}
