import React from "react";
import Header from "./Header";
import { useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useRecoilValue, useRecoilState } from "recoil";
import { memosState } from "../atoms/MemosState";
import moment from "moment";
import { myAreaResultState } from "../atoms/MyAreaResultState";

const MemoScreen = () => {
  const navigate = useNavigate();
  const [memos, setMemos] = useRecoilState(memosState);
  const [myAreaResult, setMyAreaResult] = useRecoilState(myAreaResultState);
  const [inputText, setInputText] = useState("");

  function createData(area, type, name, states, memos, memoTime) {
    return { area, type, name, states, memos, memoTime };
  }

  const addMemo = () => {
    const newMemos = [...memos];
    const currentTime = moment().format("YYYY/MM/DD HH:mm");
    newMemos.push({
      text: inputText,
      time: currentTime,
    });
    //TODO: プレゼン用に仮のデータを入れているので、後で消す
    const test = createData(
      "ふれあい",
      "うさぎ",
      "キャロット",
      null,
      inputText,
      currentTime
    );
    //myAreaResult[0]をtestに変更する
    setMyAreaResult((prevMyAreaResult) => {
      const updatedMyAreaResult = prevMyAreaResult.map((item, index) => {
        if (index === 0) {
          return test;
        }
        return item;
      });
      return updatedMyAreaResult;
    });

    setMemos(newMemos);
    setInputText("");
  };

  // //keyを設定するための関数
  // function createName(text, time) {
  //   return { text, time };
  // }

  // //Datetimeでやると思うけど、とりあえずは文字列で
  // // メモの配列を管理するstate
  // const [memos, setMemos] = useState([
  //   createName("右足と右手首に怪我あり", "2023/04/23 12:00"),
  //   createName("治療完了", "2023/04/23 14:00"),
  //   createName("呼吸器に異常あり", "2023/04/23 14:30"),
  //   createName("ただのしゃっくりでした", "2023/04/23 15:02"),
  //   createName("ただのしゃっくりでした", "2023/04/23 15:02"),
  //   createName("ただのしゃっくりでした", "2023/04/23 15:02"),
  //   createName("ただのしゃっくりでした", "2023/04/23 15:02"),
  //   createName("ただのしゃっくりでした", "2023/04/23 15:02"),
  //   createName("ただのしゃっくりでした", "2023/04/23 15:02"),
  // ]);

  return (
    <>
      <Header />
      {/* メモから担当エリアの画面に戻るボタン */}
      <button className='fixed top-48 left-40 bg-main_green rounded-full'>
        <ArrowBackIosNewIcon
          className='text-white m-4'
          sx={{ fontSize: "32px", fontWeight: "bold" }}
          onClick={() => navigate("/my-area")}
        />
      </button>
      {/* メモ本体を表示する部分 */}
      <div className='flex flex-col items-center mt-24'>
        {memos.map((memo, index) => (
          <div
            className='bg-white border-2 border-gray-300 rounded-md p-4 flex justify-between w-6/12 h-20 mb-2'
            key={index}
          >
            <div className='flex justify-center items-center text-lg font-bold text-gray-700 ml-6'>
              {memo.text}
            </div>
            <div className='flex justify-center items-end text-sm font-medium text-gray-500 mr-4'>
              {memo.time}
            </div>
          </div>
        ))}
      </div>
      {/* 追加用の入力欄とボタン */}
      <div className='flex justify-center items-center mt-24 mb-12'>
        <TextField
          className='bg-white rounded-md shadow-md w-1/2 p-2'
          sx={{
            width: "40%",
          }}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <Button
          variant='contained'
          style={{
            backgroundColor: "#88E186",
            fontWeight: 900,
            fontSize: 24,
            letterSpacing: 4,
            textIndent: 4,
            marginLeft: 10,
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: 10,
          }}
          className='w-36 h-12'
          onClick={addMemo}
        >
          追加
        </Button>
      </div>
    </>
  );
};

export default MemoScreen;
