import React, { Component } from 'react'
import { Row, Col, Typography, Timeline } from 'antd'
import Title from 'antd/lib/skeleton/Title';
import { CaretRightOutlined, CaretUpOutlined } from '@ant-design/icons';
import TimelineItem from 'antd/lib/timeline/TimelineItem';


export default class Resume extends Component {
  render() {
    const img = "https://images.unsplash.com/photo-1623284577359-a0130bb9a86d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
    const { Title } = Typography;
    const mystyle = {
      color: "white",
    };

    return (
      <div style={{ backgroundImage: "url(" + img + ")", backgroundSize: "cover", borderWidth: 0, backgroundRepeat: "no-repeat" }}>
        <div style={{ justifyContent: "center", alignItems: "center", flexDirection: "column", display: "flex" }}>
          <Title style={{ color: "#FFF" }} >Education</Title>
          <Row>
            <Col span={16} offset={4}>
              <Timeline>
                <TimelineItem >
                  <Title style={{ color: "#FFF" }} level={3}>Pursuing B.Tech (ECE) from IIMT, Greater Noida UP [ 2018-present ]</Title>
                  <Title level={5} type="success">
                    <CaretUpOutlined />
                    <span>Aggregate Precentage: 75%</span>
                  </Title>
                </TimelineItem>
                <TimelineItem>
                  <Title style={{ color: "#FFF" }} level={3}>12TH BOARD (UP Board) [ 2016-2018 ]</Title>
                  <Title level={5} type="success"> <CaretRightOutlined />
                    <span>Precentage: 60%</span>
                  </Title>
                </TimelineItem>
                <TimelineItem>
                  <Title style={{ color: "#FFF" }} level={3}>10TH BOARD (UP Board)  [ 2014-2016 ]</Title>
                  <Title level={5} type="success"> <CaretRightOutlined />
                    <span>Precentage: 80%</span>
                  </Title>
                </TimelineItem>
                <TimelineItem>
                  <Title style={{ color: "#FFF" }} level={3}>Born in 1999</Title>

                </TimelineItem>
              </Timeline>
            </Col>

          </Row>

        </div>
      </div>

    )
  }
}

const styles = {
  p: {
    color: "#FFF"
  }
}