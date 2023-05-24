import { atom } from "recoil";

//keyを設定するための関数
function createName(text, time) {
  return { text, time };
}

// バックが間に合わなかったので発表用のデータ
export const memosState = atom({
  key: "memosState",
  default: [],
});
