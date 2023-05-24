import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import MyAreaScreen from "./screens/MyAreaScreen";
import MemoScreen from "./screens/MemoScreen";
import SearchScreen from "./screens/SearchScreen";
import { RecoilRoot } from "recoil";
import axios from "axios";
import { useEffect } from "react";

function App() {
  // //keyを設定するための関数
  // function createData(
  //   ani_id,
  //   area_id,
  //   ani_type,
  //   ani_name,
  //   status_id,
  //   memos,
  //   memoTime
  // ) {
  //   return { ani_id, area_id, ani_type, ani_name, status_id, memos, memoTime };
  // }

  //初回レンダリング時にAPIからデータを取得する
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("/api/myarea");
  //       const dataWithKeys = response.data.message.map((item) =>
  //         createData(
  //           item.ani_id,
  //           item.area_id,
  //           item.ani_type,
  //           item.ani_name,
  //           item.status_id,
  //           item.memos,
  //           item.memoTime
  //         )
  //       );
  //       setRows(dataWithKeys);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path={`/my-area`} element={<MyAreaScreen />} />
          <Route path={`/login`} element={<LoginScreen />} />
          <Route path={`/memo`} element={<MemoScreen />} />
          <Route path={`/search`} element={<SearchScreen />} />
          <Route path={`/*`} element={<LoginScreen />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
