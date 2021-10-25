import React from "react";
import { Space, Input } from "antd";

const Text = ({ text }) => {
  const onTextChange = (e) => {
    text.extra.text = e.target.value;
  };

  return (
    <Space direction="vertical">
      <Space>
        <div>Text</div>
        <Input value={text.extra?.text} onChange={onTextChange} />
      </Space>
    </Space>
  );
};

export default Text;
