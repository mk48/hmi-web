import React, { useState } from "react";
import { Input, Row, Col, Select, Space, Divider } from "antd";
import { ProperyNameWidth, ValueWidth } from "./PropConst";
import Fill from "./Fill";
const { Option } = Select;

const Rect = ({ rect, data }) => {
  const [fill, setFill] = useState({ ...rect.extra?.fill });
  const [selectedWidth, setSelectedWidth] = useState(rect.extra?.width);

  const onFillChange = (filltype, color) => {
    rect.extra.fill = { ...rect.extra.fill, [filltype]: color };
    setFill(rect.extra.fill);
  };

  const onFillTagChange = (tag) => {
    rect.extra.fill = { ...rect.extra.fill, tag: tag };
    setFill(rect.extra.fill);
  };

  const handleWidthChange = (val) => {
    rect.extra.width = val;
    setSelectedWidth(val);
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
    </Space>
  );
};

export default Rect;
