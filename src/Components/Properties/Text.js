import React, { useState } from "react";
import { Space, Input } from "antd";

const Text = ({ text }) => {
  const [txt, setTxt] = useState(text.extra?.text);

  const onTextChange = (e) => {
    text.extra.text = e.target.value;
    setTxt(text.extra.text);
  };

  return (
    <Space direction="vertical">
      <Space>
        <div>Text</div>
        <Input value={txt} onChange={onTextChange} />
      </Space>
    </Space>
  );
};

export default Text;
