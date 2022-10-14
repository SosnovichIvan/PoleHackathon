import React, { useEffect } from "react";
import { Layout, Spin } from "antd";
import "antd/dist/antd.css";
import {
  Routes,
  Route,
} from "react-router-dom";
import { useAppSelector, useAppDispatch } from "redux/inerface";
import { isAuthSelector, isLoadingLogin, isSession } from "redux/auth";
import { routs } from "constants/rout";

const App = () => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(isAuthSelector);
  const isLoading = useAppSelector(isLoadingLogin);
  useEffect(() => {
    dispatch(isSession);
  }, []);

  return <Spin tip="Loading..." size="large" delay={52} style={{ maxHeight: "100vh" }} spinning={isLoading}>
    <Layout style={{ height: "100vh" }}>
      <Routes>
        {routs.map(({ path, Element, isAuthValue }) => isAuth === isAuthValue && <Route key={path} element={<Element />} {...{ path }}/>)}
      </Routes>
    </Layout> 
  </Spin>;
};

export default App;