import React, { Component } from 'react'
import { Row, Col, Typography, Timeline } from 'antd'
import { CaretRightOutlined, CaretUpOutlined } from '@ant-design/icons';
import TimelineItem from 'antd/lib/timeline/TimelineItem';


export default class Resume extends Component {
  render() {
    const { Title } = Typography;
   
    return (
      <div className="bg">
      <div className="rs" >
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
