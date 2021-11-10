import React, { useState } from "react";
import { Space, Input, Select, Row, Col } from "antd";
import { ProperyNameWidth, ValueWidth } from "./PropConst";
const { Option } = Select;

const Text = ({ text, data }) => {
  const [txt, setTxt] = useState(text.extra?.text);

  const onTextChange = (val) => {
    text.extra.text = val;
    setTxt(text.extra.text);
  };

  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Row>
        <Col span={ProperyNameWidth}>Text</Col>
        <Col span={ValueWidth}>
          <Select value={txt} style={{ width: "100%" }} onChange={onTextChange}>
            {data.map((d) => (
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

export default Text;
