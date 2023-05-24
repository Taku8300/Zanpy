import React from "react";
import Header from "./Header";
import SearchBox from "../components/SearchBox";
import { useSetRecoilState, useRecoilState } from "recoil";
import { myAreaOpenState } from "../atoms/MyAreaOpenState";
import StatesTable from "../components/StatesTable";
import { selectedTypeState } from "../atoms/SelectedTypeState";
import { selectedAreaState } from "../atoms/SelectedAreaState";
import { selectedNameState } from "../atoms/SelectedNameState";
import { selectedStatusState } from "../atoms/SelectedStatusState";
// import axios from "axios";
// import { useEffect } from "react";

const SearchScreen = () => {
  const setMyAreaOpen = useSetRecoilState(myAreaOpenState);
  const setSelectedType = useSetRecoilState(selectedTypeState);
  const setSelectedArea = useSetRecoilState(selectedAreaState);
  const setSelectedName = useSetRecoilState(selectedNameState);
  const setSelectedStatus = useSetRecoilState(selectedStatusState);
  //初回レンダリング時にmyAreaOpenStateをfalseにする
  setMyAreaOpen(false);
  //レンダリング時に検索条件をリセットする
  setSelectedType("");
  setSelectedArea("");
  setSelectedName("");
  setSelectedStatus("");

  // function createData(area, name, area, type, states, memos, memoTime) {
  //   return { area, name, area, type, states, memos, memoTime };
  // }

  //初回レンダリング時にAPIからデータを取得する
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("/api/search");
  //       const dataWithKeys = response.data.message.map((item) => createData());
  //       setSearchRows(dataWithKeys);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <>
      <Header></Header>
      <SearchBox></SearchBox>
      <StatesTable></StatesTable>
    </>
  );
};

export default SearchScreen;
