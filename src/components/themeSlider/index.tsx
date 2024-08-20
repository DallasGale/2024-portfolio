import React, { useState } from "react";
import { Slider, type SliderSingleProps } from "antd";
import { FrownOutlined, SmileOutlined } from "@ant-design/icons";
import styles from "./styles.module.scss";

const style: React.CSSProperties = {
  height: 300,
  marginInlineStart: 70,
  borderRadius: 20,
  border: "1px solid #ccc",
  display: "flex",
  width: 20,
  alignItems: "center",
  flexDirection: "column",
};

const marks: SliderSingleProps["marks"] = {
  0: "0°C",
  26: "26°C",
  37: "37°C",
  100: {
    style: { color: "#f50" },
    label: <strong>100°C</strong>,
  },
};
const ThemeSlider = () => {
  const [value, setValue] = useState(0);

  const mid = Number(((100 - 0) / 2).toFixed(5));
  const preColorCls = value >= mid ? "" : styles.active;
  const nextColorCls = value >= mid ? styles.active : "";

  return (
    <div style={style}>
      <FrownOutlined className={preColorCls} />
      {/* <div style={style}>
        <Slider vertical defaultValue={30} />
      </div> */}
      {/* <div style={style}> */}
      <Slider vertical range step={20} defaultValue={[20, 50]} />
      {/* </div> */}
      {/* <div style={style}>
        <Slider vertical range marks={marks} defaultValue={[26, 37]} />
      </div> */}
      {/* <Slider vertical onChange={setValue} value={value} /> */}
      <SmileOutlined className={nextColorCls} />
    </div>
  );
};

export default ThemeSlider;
