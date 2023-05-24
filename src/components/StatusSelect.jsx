import React from "react";
import { colourOptions } from "../data.tsx";
import Select from "react-select";

// ステータスの文字の左に表示するドット
const dot = (color = "transparent") => ({
  alignItems: "center",
  display: "flex",

  ":before": {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: "block",
    marginRight: 8,
    height: 15,
    width: 15,
  },
});

const colourStyles = {
  // 選択するところのスタイル
  option: (styles, { data }) => {
    return {
      ...styles,
      ...dot(data.color),
      backgroundColor: "white",
      color: "black",
      cursor: "default",
    };
  },
  // 一覧で表示されるところのスタイル
  singleValue: (styles, { data }) => {
    const updatedStyles = {
      ...styles,
      ...dot(data.color),
    };
    return updatedStyles;
  },
};

const StatusSelect = ({ states, handleChangeStatus, index, isMyAreaOpen }) => {
  return (
    <Select
      options={colourOptions}
      styles={colourStyles}
      onChange={(e) => handleChangeStatus(e, index)}
      value={colourOptions[states]}
      isDisabled={!isMyAreaOpen}
    />
  );
};

export default StatusSelect;
