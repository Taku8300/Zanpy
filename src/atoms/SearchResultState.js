import { atom } from "recoil";

// 検索結果を管理する
export const searchResultState = atom({
  key: "searchResultState",
  default: [],
});
