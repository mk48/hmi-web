import { useQuery, useMutation } from "react-query";
import axios from "axios";
import { Slider, Row, Col, Spin, Space } from "antd";

import { SERVER_URL } from "../Util/constant";
import { useState } from "react";

const Width = {
  name: 1,
  slider: 22,
  value: 1,
};

const Simulator = () => {
  const { isLoading } = useQuery("data", () => axios.get(`${SERVER_URL}/data`), {
    onSuccess: (d) => {
      setTag3(d.data.tag3);
      setTag2(d.data.tag2);
      setTag1(d.data.tag1);
    },
  });
  const updateMutation = useMutation((updatedData) => {
    return axios.post(`${SERVER_URL}/data`, updatedData);
  });
  const [tag3, setTag3] = useState(0);
  const [tag2, setTag2] = useState(0);
  const [tag1, setTag1] = useState(0);

  const onChangeTag1 = (val) => {
    setTag1(val);
    updateMutation.mutate({ tag1: val });
  };

  const onChangeTag2 = (val) => {
    setTag2(val);
    updateMutation.mutate({ tag2: val });
  };

  const onChangeTag3 = (val) => {
    setTag3(val);
    updateMutation.mutate({ tag3: val });
  };

  if (isLoading) {
    return <Spin size="large" />;
  }

  return (
    <>
      <Row>
        <Col span={Width.name}>tag1</Col>
        <Col span={Width.slider}>
          <Slider min={1} max={400} onChange={onChangeTag1} value={tag1} />
        </Col>
        <Col span={Width.value}>{tag1}</Col>
      </Row>

      <Row>
        <Col span={Width.name}>tag2</Col>
        <Col span={Width.slider}>
          <Slider min={1} max={400} onChange={onChangeTag2} value={tag2} />
        </Col>
        <Col span={Width.value}>{tag2}</Col>
      </Row>

      <Row>
        <Col span={Width.name}>tag3</Col>
        <Col span={Width.slider}>
          <Slider min={1} max={400} onChange={onChangeTag3} value={tag3} />
        </Col>
        <Col span={Width.value}>{tag3}</Col>
      </Row>
    </>
  );
};

export default Simulator;
