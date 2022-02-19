import React, { useState } from "react";
import { Row, Col, Input, Button } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import HeaderBack from "../../pictures/headerBack.jpg";
const Body = () => {
  const [countExample, setCountExample] = React.useState(0);
  const onSearch = (val) => {
    console.log(val);
  };
  const count = () => {
    setCountExample(countExample + 1);
    console.log(countExample);
  };
  React.useEffect = () => {};
  const { Search } = Input;
  return (
    <div style={{ backgroundColor: "black" }}>
      <Col span={24}>
        <div
          style={{ backgroundColor: "grey", paddingTop: 10, paddingBottom: 10 }}
        >
          <Row justify="space-around">
            <Row justify="space-around">
              <Col span={2} style={{ color: "white" }}>
                Эхлэх{" "}
              </Col>
              <Col span={2} style={{ color: "white" }}>
                News{" "}
              </Col>
              <Col span={2} style={{ color: "white" }}>
                Video{" "}
              </Col>
              <Col span={2} style={{ color: "white" }}>
                Podcast
              </Col>
            </Row>
            <Row span={12} justify="center">
              <Search
                placeholder="input search text"
                allowClear
                onSearch={onSearch}
                style={{ width: 200 }}
              />
            </Row>
          </Row>
        </div>
        <Row justify="space-around">
          <Col span={12}>
            <div style={{ height: 500, padding: 50 }}>
              <Col>
                <div>
                  <p style={{ color: "white", fontSize: 72 }}>Thinking diff</p>
                </div>
                <div>
                  <p style={{ color: "white", fontSize: "20" }}>
                    Official website of the Olympic Games. Access breaking Tokyo
                    2020 news, plus records and video highlights from the best
                    historic moments in global sport.
                  </p>
                </div>
                <Button type="primary" onClick={count}>
                  Дэлгэрэнгүй
                </Button>
                <Col>
                  <span style={{ color: "white" }}>{countExample}</span>
                </Col>
              </Col>
            </div>
          </Col>
          <Col span={12}>
            <div
              style={{
                padding: 50,
              }}
            >
              <div
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  style={{
                    height: 400,
                    width: "90%",
                  }}
                  src={HeaderBack}
                  alt="Logo"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Col>
    </div>
  );
};

export default Body;
