import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import { useRecoilValue, useRecoilState } from "recoil";
import { myAreaOpenState } from "../atoms/MyAreaOpenState";
import { selectedTypeState } from "../atoms/SelectedTypeState";
import { selectedAreaState } from "../atoms/SelectedAreaState";
import { selectedNameState } from "../atoms/SelectedNameState";
import { selectedStatusState } from "../atoms/SelectedStatusState";
import { searchResultState } from "../atoms/SearchResultState";

const SearchBox = () => {
  const isMyAreaOpen = useRecoilValue(myAreaOpenState);
  const [selectedType, setSelectedType] = useRecoilState(selectedTypeState);
  const [selectedArea, setSelectedArea] = useRecoilState(selectedAreaState);
  const [selectedName, setSelectedName] = useRecoilState(selectedNameState);
  const [selectedStatus, setSelectedStatus] =
    useRecoilState(selectedStatusState);
  const [searchResult, setSearchResult] = useRecoilState(searchResultState);

  function createData(area, type, name, states, memos, memoTime) {
    return { area, type, name, states, memos, memoTime };
  }

  const clicked = () => {
    if (isMyAreaOpen) {
      return;
    }
    setSearchResult([
      createData(
        "鳥ランド",
        "ペンギン",
        "ウィージー",
        1,
        "右足負傷",
        "2023/05/15 09:00"
      ),
      createData(
        "鳥ランド",
        "ペンギン",
        "ぺんぺん",
        2,
        "サバンナで発見されました",
        "2023/05/15 10:00"
      ),
      createData("鳥ランド", "ペンギン", "エリザベス", 0, "", ""),
    ]);
  };

  return (
    <div className='fixed left-16 top-64'>
      {/* マイエリアの時のみ文字を表示する */}
      {isMyAreaOpen && (
        <p className='flex items-center justify-center font-black text-test mb-4 text-xl tracking-widest'>
          担当エリア内検索
        </p>
      )}
      {/* ボックスを囲むやつ */}
      <div className=' bg-white rounded-3xl shadow-xl'>
        {/* ボックスの中身 */}
        <div className='flex flex-col gap-6 px-12 pt-2 pb-6  '>
          {/* マイエリアじゃない時のみエリア検索を表示する */}
          {!isMyAreaOpen && (
            <Autocomplete
              options={areae}
              value={selectedArea}
              onChange={(event, value) => setSelectedArea(value)}
              sx={{
                width: 160,
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  borderColor: "black",
                },
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label='エリア'
                  InputLabelProps={{
                    style: {
                      color: "#706F6F",
                      fontWeight: 900,
                      fontSize: 18,
                      position: "relative",
                      top: 28,
                    },
                  }}
                />
              )}
            />
          )}

          {/* 種類検索 */}
          <Autocomplete
            options={types}
            value={selectedType}
            onChange={(event, value) => setSelectedType(value)}
            sx={{
              width: 160,
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                borderColor: "black",
              },
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label='種類'
                InputLabelProps={{
                  style: {
                    color: "#706F6F",
                    fontWeight: 900,
                    fontSize: 22,
                    position: isMyAreaOpen && "relative",
                    top: isMyAreaOpen && 28,
                  },
                }}
              />
            )}
          />

          {/* 名前検索 */}
          <TextField
            id='outlined-basic'
            label='名前'
            value={selectedName}
            onChange={(event) => setSelectedName(event.target.value)}
            sx={{
              width: 160,
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                borderColor: "black",
              },
            }}
            variant='outlined'
            InputLabelProps={{
              style: {
                color: "#706F6F",
                fontWeight: 900,
                fontSize: 22,
              },
            }}
          />

          {/* ステータス検索 */}
          <Autocomplete
            options={status}
            value={selectedStatus}
            onChange={(event, value) => setSelectedStatus(value)}
            sx={{
              width: 160,
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                borderColor: "black",
              },
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label='ステータス'
                InputLabelProps={{
                  style: {
                    color: "#706F6F",
                    fontWeight: 900,
                    fontSize: 18,
                  },
                }}
              />
            )}
          />

          {/* 検索ボタン */}
          <div className='flex justify-center'>
            <Button
              variant='contained'
              style={{
                backgroundColor: "#88E186",
                fontWeight: 900,
                fontSize: 24,
                position: "relative",
                top: 4,
                paddingRight: 10,
                letterSpacing: 4,
                textIndent: 4,
                borderRadius: 10,
              }}
              className='w-36 h-12'
              onClick={clicked}
            >
              検索
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;

const types = [
  { label: "イルカ", id: 0 },
  { label: "シャチ", id: 1 },
  { label: "キリン", id: 2 },
  { label: "ライオン", id: 3 },
  { label: "トラ", id: 4 },
  { label: "チンパンジー", id: 5 },
  { label: "うさぎ", id: 6 },
  { label: "レッサーパンダ", id: 7 },
  { label: "リスざる", id: 8 },
  { label: "フラミンゴ", id: 9 },
  { label: "ペンギン", id: 10 },
];

const status = [
  { label: "無事", id: 0 },
  { label: "怪我", id: 1 },
  { label: "脱走", id: 2 },
  { label: "不明", id: 3 },
];

const areae = [
  { label: "マリン", id: 0 },
  { label: "サバンナ", id: 1 },
  { label: "ジャングル", id: 2 },
  { label: "ふれあい", id: 3 },
  { label: "鳥ランド", id: 4 },
];
