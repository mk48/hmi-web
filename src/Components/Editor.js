import React from "react";
import { Row, Col, Space, Button } from "antd";
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";
import { PlusCircleOutlined, PlusSquareOutlined } from "@ant-design/icons";

const Editor = () => {
  const { editor, onReady } = useFabricJSEditor();
  const onAddCircle = () => {
    editor?.addCircle();
  };
  const onAddRectangle = () => {
    editor?.addRectangle();
  };

  const onSave = () => {
    const drawingCanvas = editor?.canvas.toJSON();

    console.log(drawingCanvas);
  };

  return (
    <>
      <button onClick={onSave}>Save</button>
      <Row>
        <Col flex="70px">
          <Space direction="vertical">
            <Button onClick={onAddCircle} icon={<PlusCircleOutlined />} />
            <Button onClick={onAddRectangle} icon={<PlusSquareOutlined />} />
          </Space>
        </Col>
        <Col flex="auto">
          <FabricJSCanvas className="canvas" onReady={onReady} />
        </Col>
        <Col flex="200px">col</Col>
      </Row>
    </>
  );
};

export default Editor;
