import React, { useEffect, useState } from "react";
import AuthRouter from "./AuthRouter";
import MainRouter from "./MainRouter";
import { useDispatch, useSelector } from "react-redux";
import {
  addAuth,
  authSeleter,
  AuthState,
} from "../reduxs/reducers/authReducer";
import { localDataNames } from "../constants/appInfos";
import { Spin } from "antd";

const Routers = () => {
  const [isLoading, setIsLoading] = useState(false);
  const auth: AuthState = useSelector(authSeleter);
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const res = localStorage.getItem(localDataNames.authData);
    res && dispatch(addAuth(JSON.parse(res)));
  };

  return isLoading ? <Spin /> : !auth.token ? <AuthRouter /> : <MainRouter />;
};

export default Routers;
