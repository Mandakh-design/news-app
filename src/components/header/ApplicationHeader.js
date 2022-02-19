import React, { useState } from "react";
import { Col, Divider, Row } from "antd";
import HeaderBack from "../../pictures/headerBack.jpg";
function ApplicationHeader() {
  return (
    <div
      style={{
        display: "flex",
        backgroundImage: "url(" + HeaderBack + ")",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
      }}
    >
      <Col>
        <Row
          span={24}
          style={{ color: "white", fontSize: 45 }}
          justify="center"
        >
          GASP
        </Row>
        <Row
          span={24}
          style={{ color: "white", fontSize: 20 }}
          justify="center"
        >
          hello world
        </Row>
      </Col>
    </div>
  );
}

export default ApplicationHeader;
