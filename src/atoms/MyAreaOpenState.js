import { atom } from "recoil";

// 担当エリアか検索を開いているかどうかの状態を管理する
export const myAreaOpenState = atom({
  key: "myAreaOpenState",
  default: false,
});
