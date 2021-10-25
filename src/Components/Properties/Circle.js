import React from "react";
import { Space, Input } from "antd";

const Circle = ({ circle }) => {
  const onFillOnChange = (e) => {
    circle.extra.fill = e.target.value;
  };

  const onRadiusOnChange = (e) => {
    circle.extra.radius = e.target.value;
  };

  return (
    <Space direction="vertical">
      <Space>
        <div>Fill</div>
        <Input value={circle.extra?.fill} onChange={onFillOnChange} />
      </Space>
      <Space>
        <div>Radius</div>
        <Input value={circle.extra?.radius} onChange={onRadiusOnChange} />
      </Space>
    </Space>
  );
};

export default Circle;
