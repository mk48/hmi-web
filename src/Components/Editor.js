import React, { useState } from "react";
import { fabric } from "fabric";
import { useMutation } from "react-query";
import { Row, Col, Space, Button } from "antd";
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";
import axios from "axios";
import { PlusCircleOutlined, PlusSquareOutlined, FontSizeOutlined } from "@ant-design/icons";
import Properties from "./Properties";

const Editor = () => {
  const { editor, onReady } = useFabricJSEditor();
  const [selected, setSelected] = useState(null);
  const saveMutation = useMutation((newEditorObjects) => {
    return axios.post("http://localhost:3001/hmi", newEditorObjects);
  });

  /*useEffect(() => {
    editor?.canvas.on("selection:updated", function (opt) {
      console.log(opt);
    });
  }, [editor]);*/

  const onAddCircle = () => {
    //editor?.addCircle();
    //const id = nanoid();
    var circle = new fabric.Circle({
      //__uid: id,
      extra: {},
      radius: 20,
      fill: "transparent",
      strokeWidth: 1,
      stroke: "black",
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
      extra: {},
      left: 70,
      top: 70,
      fill: "transparent",
      strokeWidth: 1,
      stroke: "black",
      width: 20,
      height: 20,
    });

    rect.onSelect = (e) => {
      setSelected(rect);
    };
    editor?.canvas.add(rect);
  };

  const onAddText = () => {
    var text = new fabric.Text("Text", { extra: {}, left: 50, top: 50, fontSize: 16 });
    text.onSelect = (e) => {
      setSelected(text);
    };
    editor?.canvas.add(text);
  };

  const onSave = () => {
    //const drawingCanvas = editor?.canvas.toJSON();
    const editorObjects = editor?.canvas.toDatalessJSON(["extra"]);
    //localStorage.setItem("editorObjects", JSON.stringify(editorObjects));
    console.log(editorObjects);
    saveMutation.mutate(editorObjects);
  };

  const onLoad = () => {
    const editorObjects = JSON.parse(localStorage.getItem("editorObjects"));
    editor?.canvas.loadFromJSON(editorObjects, editor?.canvas.renderAll.bind(editor?.canvas));
    editor?.canvas.forEachObject((e) => {
      e.onSelect = (evnt) => {
        setSelected(e);
      };
    });
  };

  return (
    <>
      <Space>
        <Button onClick={onSave}>Save</Button>
        <Button onClick={onLoad}>Load</Button>
      </Space>
      <Row>
        <Col span={1}>
          <Space direction="vertical">
            <Button onClick={onAddCircle} icon={<PlusCircleOutlined />} />
            <Button onClick={onAddRectangle} icon={<PlusSquareOutlined />} />
            <Button onClick={onAddText} icon={<FontSizeOutlined />} />
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
