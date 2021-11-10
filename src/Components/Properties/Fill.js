import { Input, Row, Col, Space, Select } from "antd";
const { Option } = Select;

const Fill = ({ data, fill, onFillChange, onFillTagChange }) => {
  return (
    <>
      <Row>
        <Col span={24}>
          <Select value={fill.tag} style={{ width: "100%" }} onChange={onFillTagChange}>
            {data
              .filter((d) => d.type === "digital")
              .map((d) => (
                <Option key={"width-" + d.name} value={d.name}>
                  {d.name}
                </Option>
              ))}
          </Select>
        </Col>
      </Row>
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
    </>
  );
};

export default Fill;
