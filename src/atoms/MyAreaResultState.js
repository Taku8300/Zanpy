import { atom } from "recoil";

//keyを設定するための関数
// function createData(
//   ani_id,
//   area_id,
//   ani_type,
//   ani_name,
//   status_id,
//   memos,
//   memoTime
// ) {
//   return { ani_id, area_id, ani_type, ani_name, status_id, memos, memoTime };
// }

//TODO:昔のやつなので後でちゃんとやる
function createData(area, type, name, states, memos, memoTime) {
  return { area, type, name, states, memos, memoTime };
}

// 担当エリアの状態を管理する
export const myAreaResultState = atom({
  key: "myAreaResultState",
  default: [
    createData("ふれあい", "うさぎ", "キャロット", null, "", ""),
    createData("ふれあい", "うさぎ", "ぴょんすけ", null, "", ""),
    createData("ふれあい", "うさぎ", "ミッフィー", null, "", ""),
    createData("ふれあい", "うさぎ", "ピーター", null, "", ""),
    createData("ふれあい", "レッサーパンダ", "ラスカル", null, "", ""),
    createData("ふれあい", "レッサーパンダ", "メイ", null, "", ""),
    createData("ふれあい", "リスざる", "ジュリアン", null, "", ""),
    createData("ふれあい", "リスざる", "ジュリアン", null, "", ""),
    createData("ふれあい", "リスざる", "ジュリアン", null, "", ""),
    createData("ふれあい", "リスざる", "ジュリアン", null, "", ""),
  ],
});
