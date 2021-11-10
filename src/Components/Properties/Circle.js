import React, { useState } from "react";
import { Input, Row, Col, Space, Select } from "antd";
import { ProperyNameWidth, ValueWidth } from "./PropConst";
import Fill from "./Fill";
const { Option } = Select;

const Circle = ({ circle, data }) => {
  const [fill, setFill] = useState(circle.extra?.fill);
  const [radius, setRadius] = useState(circle.extra?.radius);

  const onFillChange = (filltype, color) => {
    circle.extra.fill = { ...circle.extra.fill, [filltype]: color };
    setFill(circle.extra.fill);
  };

  const onFillTagChange = (tag) => {
    circle.extra.fill = { ...circle.extra.fill, tag: tag };
    setFill(circle.extra.fill);
  };

  const onRadiusOnChange = (val) => {
    circle.extra.radius = val;
    setRadius(circle.extra.radius);
  };

  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Row>
        <Col span={ProperyNameWidth}>Fill</Col>
        <Col span={ValueWidth}>
          <Fill fill={fill} data={data} onFillChange={onFillChange} onFillTagChange={onFillTagChange} />
        </Col>
      </Row>
      <Row>
        <Col span={ProperyNameWidth}>Radius</Col>
        <Col span={ValueWidth}>
          <Select value={radius} style={{ width: "100%" }} onChange={onRadiusOnChange}>
            {data
              .filter((d) => d.type === "analog")
              .map((d) => (
                <Option key={"width-" + d.name} value={d.name}>
                  {d.name}
                </Option>
              ))}
          </Select>
        </Col>
      </Row>
    </Space>
  );
};

export default Circle;
