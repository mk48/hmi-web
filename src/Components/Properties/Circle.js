import React, { useState } from "react";
import { Input, Row, Col } from "antd";
import { ProperyNameWidth, ValueWidth } from "./PropConst";

const Circle = ({ circle, data }) => {
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
    <>
      <Row>
        <Col span={ProperyNameWidth}>Fill</Col>
        <Col span={ValueWidth}>
          <Input value={fill} onChange={onFillOnChange} />
        </Col>
      </Row>
      <Row>
        <Col span={ProperyNameWidth}>Radius</Col>
        <Col span={ValueWidth}>
          <Input value={radius} onChange={onRadiusOnChange} />
        </Col>
      </Row>
    </>
  );
};

export default Circle;
