import React from "react";

import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { authSeleter, refreshToken } from "../reduxs/reducers/authReducer";
import handleAPI from "../apis/handleAPI";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const auth = useSelector(authSeleter)
  const getProducts = async () => {
    const api = "/storage/products";
    try {
      const res: any = await handleAPI(api);
      console.log(res.message);
      console.log('Đã có quyền')
    } catch (error: any) {
      if (error.error === "jwt expired") {
        handleRefreshToken()
      }
    }
  };
  const handleRefreshToken = async ()=>{
    const api = `/auth/refresh-token?id=${auth._id}`
    try {
      const res = await handleAPI(api)
      console.log(res)
      dispatch(refreshToken(res.data))
    } catch (error: any) {
      console.log(error)
    }
  }
  return (
    <>
      <Button onClick={getProducts}>Hello</Button>
    </>
  );
};

export default HomeScreen;
