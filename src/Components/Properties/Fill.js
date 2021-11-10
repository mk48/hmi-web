import { Input, Row, Col, Space } from "antd";

const Fill = ({ fill, onFillChange }) => {
  return (
    <Row>
      <Col span={12}>
        <Space direction="vertical" style={{ width: "100%" }}>
          <div>ON</div>
          <Input type="color" value={fill.on} onChange={(e) => onFillChange("on", e.target.value)} />
        </Space>
      </Col>
      <Col span={12}>
        <Space direction="vertical" style={{ width: "100%" }}>
          <div>OFF</div>
          <Input type="color" value={fill.off} onChange={(e) => onFillChange("off", e.target.value)} />
        </Space>
      </Col>
    </Row>
  );
};

export default Fill;
