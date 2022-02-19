import React, { useState } from "react";
import { Row, Col } from "antd";
import { HomeOutlined } from "@ant-design/icons";
const MainPages = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <Col>
        <Row span={24} justify="center">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </Row>
        <Row span={24} justify="center"></Row>
      </Col>
    </div>
  );
};

export default MainPages;
