import React, { useState } from "react";
import { Space, Input } from "antd";

const Rect = ({ rect }) => {
  const [fill, setFill] = useState(rect.extra?.fill);
  const [width, setWidth] = useState(rect.extra?.width);

  const onFillChange = (e) => {
    rect.extra.fill = e.target.value;
    setFill(rect.extra.fill);
  };

  const onWidthChange = (e) => {
    rect.extra.width = e.target.value;
    setWidth(rect.extra.width);
  };

  return (
    <Space direction="vertical">
      <Space>
        <div>Fill</div>
        <Input value={fill} onChange={onFillChange} />
      </Space>
      <Space>
        <div>Width</div>
        <Input value={width} onChange={onWidthChange} />
      </Space>
    </Space>
  );
};

export default Rect;
