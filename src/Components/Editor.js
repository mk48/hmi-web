import React, { useEffect, useState } from "react";
import { fabric } from "fabric";
import { Row, Col, Space, Button } from "antd";
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";
import { PlusCircleOutlined, PlusSquareOutlined } from "@ant-design/icons";
import Properties from "./Properties";

const Editor = () => {
  const { editor, selectedObjects, onReady } = useFabricJSEditor();
  const [selected, setSelected] = useState(null);
  /*useEffect(() => {
    editor?.canvas.on("selection:updated", function (opt) {
      console.log(opt);
    });
  }, [editor]);*/

  const onAddCircle = () => {
    //editor?.addCircle();
    var circle = new fabric.Circle({
      radius: 20,
      fill: "green",
      left: 100,
      top: 100,
    });
    circle.onSelect = (e) => {
      setSelected(circle);
    };
    editor?.canvas.add(circle);
  };

  const onAddRectangle = () => {
    //editor?.addRectangle();
    var rect = new fabric.Rect({
      left: 100,
      top: 100,
      //fill: "red",
      width: 20,
      height: 20,
    });

    rect.onSelect = (e) => {
      setSelected(rect);
    };
    editor?.canvas.add(rect);
  };

  const onSave = () => {
    //const drawingCanvas = editor?.canvas.toJSON();
    console.log(selectedObjects);
  };

  return (
    <>
      <button onClick={onSave}>Save</button>
      <Row>
        <Col span={1}>
          <Space direction="vertical">
            <Button onClick={onAddCircle} icon={<PlusCircleOutlined />} />
            <Button onClick={onAddRectangle} icon={<PlusSquareOutlined />} />
          </Space>
        </Col>
        <Col span={19}>
          <FabricJSCanvas className="canvas" onReady={onReady} />
        </Col>
        <Col span={4}>
          <Properties obj={selected} />
        </Col>
      </Row>
    </>
  );
};

export default Editor;
