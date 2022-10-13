import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import { routs } from "constants/rout";

const App = () => {
  const isAuth = true;
  return <Routes>
    {routs.map(({ path, Element, isAuthValue }) => isAuth === isAuthValue && <Route key={path} element={<Element />} {...{ path }}/>)}
  </Routes>;
};

export default App;