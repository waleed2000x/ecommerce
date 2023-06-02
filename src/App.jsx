import React, { useState } from "react";
import "./App.css";
import Body from "./body/Body";
import { Route, Routes } from "react-router-dom";
import Home from "./body/Pages/Home/Home";
import Trending from "./body/Pages/Trending/Trending";
import Accsesories from "./body/Pages/Products/Accsesories";
import Furniture from "./body/Pages/Products/Furniture";
import Digital from "./body/Pages/Products/Digital";
import Beauty from "./body/Pages/Products/Beauty";
import Health from "./body/Pages/Products/Health";
import Join from "./body/Pages/Join/Join";
import Contact from "./body/Pages/Contact/Contact";
import Products from "./body/Pages/Products/Products";
import { ThemeContext, themes } from "./context/ThemeContext";
import Clothing from "./body/Pages/Products/Clothing";

export default function App() {
  const [theme, setTheme] = useState(themes.light);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Body theme={theme} setTheme={setTheme} />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/trending" Component={Trending} />
        <Route path="/products" Component={Products}>
          <Route path="/products" Component={Clothing} />
          <Route path="/products/beauty" Component={Beauty} />
          <Route path="/products/digital" Component={Digital} />
          <Route path="/products/accsesories" Component={Accsesories} />
          <Route path="/products/furniture" Component={Furniture} />
          <Route path="/products/health" Component={Health} />
        </Route>
        <Route path="/join" Component={Join} />
        <Route path="/contact" Component={Contact} />
      </Routes>
    </ThemeContext.Provider>
  );
}
