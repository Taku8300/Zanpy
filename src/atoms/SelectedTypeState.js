import { atom } from "recoil";

// selectedTypeを管理する
export const selectedTypeState = atom({
  key: "selectedTypeState",
  default: "",
});
