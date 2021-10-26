import React, { useState } from "react";
import { Input, Row, Col, Select } from "antd";
import { ProperyNameWidth, ValueWidth } from "./PropConst";
const { Option } = Select;

const Rect = ({ rect, data }) => {
  const [fill, setFill] = useState(rect.extra?.fill);
  const [selectedWidth, setSelectedWidth] = useState(rect.extra?.width);

  const onFillChange = (e) => {
    rect.extra.fill = e.target.value;
    setFill(rect.extra.fill);
  };

  const handleWidthChange = (val) => {
    rect.extra.width = val;
    setSelectedWidth(val);
  };

  return (
    <>
      <Row>
        <Col span={ProperyNameWidth}>Fill</Col>
        <Col span={ValueWidth}>
          <Input value={fill} onChange={onFillChange} />
        </Col>
      </Row>
      <Row>
        <Col span={ProperyNameWidth}>Width</Col>
        <Col span={ValueWidth}>
          <Select value={selectedWidth} style={{ width: "100%" }} onChange={handleWidthChange}>
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
    </>
  );
};

export default Rect;
