import React, { useEffect, useState } from "react";
import { Space, Input } from "antd";

const Rect = ({ rect }) => {
  const onFillChange = (e) => {
    rect.extra.fill = e.target.value;
  };

  const onWidthChange = (e) => {
    rect.extra.width = e.target.value;
  };

  return (
    <Space direction="vertical">
      <Space>
        <div>Fill</div>
        <Input value={rect.extra?.fill} onChange={onFillChange} />
      </Space>
      <Space>
        <div>Width</div>
        <Input value={rect.extra?.width} onChange={onWidthChange} />
      </Space>
    </Space>
  );
};

export default Rect;
