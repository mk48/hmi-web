import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { Slider, Row, Col, Spin, Divider, PageHeader, Checkbox } from "antd";

import { SERVER_URL } from "../../Util/constant";

import AddNew from "./AddNew";

const Width = {
  name: 5,
  slider: 18,
  value: 1,
};

const Simulator = () => {
  const queryClient = useQueryClient();
  const { isLoading, data } = useQuery("data", () => axios.get(`${SERVER_URL}/data`));
  const updateMutation = useMutation(
    (updatedData) => {
      return axios.post(`${SERVER_URL}/data`, updatedData);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("data");
      },
    }
  );

  const onChangeTag = (tagName, val) => {
    updateMutation.mutate({ name: tagName, val: val });
  };

  if (isLoading) {
    return <Spin size="large" />;
  }

  return (
    <>
      <PageHeader ghost={false} title="PLC tags" subTitle="Simulator for PLC tags">
        {data.data.map((tag, index) => {
          return (
            <Row key={tag.name}>
              <Col span={Width.name}>{tag.name}</Col>
              <Col span={Width.slider}>
                {tag.type === "analog" ? (
                  <Slider min={1} max={400} onChange={(val) => onChangeTag(tag.name, val)} value={tag.val} />
                ) : (
                  <Checkbox onChange={(e) => onChangeTag(tag.name, e.target.checked)} checked={tag.val} />
                )}
              </Col>
              <Col span={Width.value}>{Number(tag.val)}</Col>
            </Row>
          );
        })}
        <Divider />
        <AddNew />
      </PageHeader>
    </>
  );
};

export default Simulator;
