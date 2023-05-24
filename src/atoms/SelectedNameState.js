import { atom } from "recoil";

// selectedNameを管理する
export const selectedNameState = atom({
  key: "selectedNameState",
  default: "",
});
