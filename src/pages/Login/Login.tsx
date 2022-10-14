import React, { useEffect } from "react";
import { useAppDispatch } from "redux/inerface";
import { loginUser } from "redux/auth";

const Login = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(loginUser({ email: "aaa", password: "21321" }));
    }, 1000);
  }, []);
  return <div>Login</div>;
};

export default Login;