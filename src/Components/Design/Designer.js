import React from "react";
import { fabric } from "fabric";
import { useMutation, useQuery } from "react-query";
import { PageHeader, Row, Col, Space, Button, Divider, Spin } from "antd";
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";
import axios from "axios";
import { PlusCircleOutlined, PlusSquareOutlined, FontSizeOutlined, DeleteOutlined, SaveOutlined } from "@ant-design/icons";
import { SERVER_URL } from "../../Util/constant";
import Properties from "../Properties";
import "./style.css";

const Designer = () => {
  const { editor, onReady } = useFabricJSEditor();
  const fetchHmi = useQuery("hmi", () => axios.get(`${SERVER_URL}/hmi`), {
    refetchOnWindowFocus: false,
    enabled: !!editor?.canvas,
    onSuccess: (res) => {
      editor?.canvas.loadFromJSON(res.data, editor?.canvas.renderAll.bind(editor?.canvas));
      editor?.canvas.requestRenderAll();
    },
  });
  const saveMutation = useMutation((newEditorObjects) => {
    return axios.post(`${SERVER_URL}/hmi`, newEditorObjects);
  });

  const onAddCircle = () => {
    var circle = new fabric.Circle({
      extra: {},
      radius: 20,
      fill: "transparent",
      strokeWidth: 1,
      stroke: "black",
      left: 100,
      top: 100,
    });

    editor?.canvas.add(circle);
  };

  const onAddRectangle = () => {
    var rect = new fabric.Rect({
      extra: {},
      left: 70,
      top: 70,
      fill: "transparent",
      strokeWidth: 1,
      stroke: "black",
      width: 20,
      height: 20,
    });

    editor?.canvas.add(rect);
  };

  const onAddText = () => {
    var text = new fabric.Text("Text", { extra: {}, left: 50, top: 50, fontSize: 16 });
    editor?.canvas.add(text);
  };

  const onSave = () => {
    const editorObjects = editor?.canvas.toDatalessJSON(["extra"]);
    saveMutation.mutate(editorObjects);
  };

  const onRemove = () => {
    const selectedObj = editor?.canvas.getActiveObject();
    if (selectedObj) {
      editor?.canvas.remove(selectedObj);
    }
  };

  return (
    <>
      <PageHeader
        ghost={false}
        title="HMI Designer"
        subTitle="Design your HMI screen"
        extra={[
          <Button key="1" type="primary" onClick={onSave} loading={saveMutation.isLoading} icon={<SaveOutlined />}>
            Save
          </Button>,
        ]}
      >
        {fetchHmi.isLoading && <Spin size="large" />}
        <Row>
          <Col span={1}>
            <Space direction="vertical">
              <Button onClick={onAddCircle} icon={<PlusCircleOutlined />} />
              <Button onClick={onAddRectangle} icon={<PlusSquareOutlined />} />
              <Button onClick={onAddText} icon={<FontSizeOutlined />} />
              <Divider />
              <Button onClick={onRemove} icon={<DeleteOutlined />} />
            </Space>
          </Col>
          <Col span={14} className="dotbackground" style={{ marginLeft: 20, marginRight: 20 }}>
            <FabricJSCanvas className="canvas" onReady={onReady} />
          </Col>
          <Col span={7}>
            <Properties obj={editor?.canvas.getActiveObject()} />
          </Col>
        </Row>
      </PageHeader>
    </>
  );
};

export default Designer;
