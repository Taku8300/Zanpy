import { atom } from "recoil";

// selectedAreaを管理する
export const selectedAreaState = atom({
  key: "selectedAreaState",
  default: "",
});
