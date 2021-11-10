import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { Form, Input, Button, Select, Typography } from "antd";
import { SERVER_URL } from "../../Util/constant";

const { Option } = Select;
const { Title } = Typography;

const AddNew = () => {
  const queryClient = useQueryClient();
  const updateMutation = useMutation(
    (updatedData) => {
      return axios.post(`${SERVER_URL}/data`, updatedData);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("data");
        form.resetFields();
      },
    }
  );
  const [form] = Form.useForm();

  const onFinish = (values) => {
    updateMutation.mutate({ ...values, val: 0, unit: "" });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Title level={3}>Add new tag</Title>
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item label="Tag name" name="name" rules={[{ required: true, message: "Please input your tag name!" }]}>
          <Input />
        </Form.Item>

        <Form.Item name="type" label="Tag type" rules={[{ required: true }]}>
          <Select placeholder="Select tag type" allowClear>
            <Option value="analog">Analog</Option>
            <Option value="digital">Digital</Option>
          </Select>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Add new
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AddNew;
