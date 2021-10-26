import React, { useState } from "react";
import { Space, Input } from "antd";

const Circle = ({ circle }) => {
  const [fill, setFill] = useState(circle.extra?.fill);
  const [radius, setRadius] = useState(circle.extra?.radius);

  const onFillOnChange = (e) => {
    circle.extra.fill = e.target.value;
    setFill(circle.extra.fill);
  };

  const onRadiusOnChange = (e) => {
    circle.extra.radius = e.target.value;
    setRadius(circle.extra.radius);
  };

  return (
    <Space direction="vertical">
      <Space>
        <div>Fill</div>
        <Input value={fill} onChange={onFillOnChange} />
      </Space>
      <Space>
        <div>Radius</div>
        <Input value={radius} onChange={onRadiusOnChange} />
      </Space>
    </Space>
  );
};

export default Circle;
