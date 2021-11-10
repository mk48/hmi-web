import React, { useState } from "react";
import { Space, Input, Select } from "antd";
const { Option } = Select;

const Text = ({ text, data }) => {
  const [txt, setTxt] = useState(text.extra?.text);

  const onTextChange = (val) => {
    text.extra.text = val;
    setTxt(text.extra.text);
  };

  return (
    <Space direction="vertical">
      <Space>
        <div>Text</div>
        <Select value={txt} style={{ width: "100%" }} onChange={onTextChange}>
          {data
            .filter((d) => d.type === "analog")
            .map((d) => (
              <Option key={"width-" + d.name} value={d.name}>
                {d.name}
              </Option>
            ))}
        </Select>
      </Space>
    </Space>
  );
};

export default Text;
