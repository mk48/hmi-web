import React, { useEffect, useState } from "react";
import { Row, Col, Space, Button } from "antd";

const Circle = ({ circle }) => {
  return (
    <Space direction="vertical">
      <Space>
        <div>Fill</div> <div>val1</div>
      </Space>
      <Space>
        <div>Radius</div> <div>val2</div>
      </Space>
    </Space>
  );
};

export default Circle;
