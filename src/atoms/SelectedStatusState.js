import { atom } from "recoil";

// selectedStatusを管理する;
export const selectedStatusState = atom({
  key: "selectedStatusState",
  default: "",
});
