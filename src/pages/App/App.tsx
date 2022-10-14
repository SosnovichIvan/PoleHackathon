import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import { useAppSelector } from "redux/inerface";
import { isAuthSelector } from "redux/auth";
import { routs } from "constants/rout";

const App = () => {
  const isAuth = useAppSelector(isAuthSelector);
  return <Routes>
    {routs.map(({ path, Element, isAuthValue }) => isAuth === isAuthValue && <Route key={path} element={<Element />} {...{ path }}/>)}
  </Routes>;
};

export default App;