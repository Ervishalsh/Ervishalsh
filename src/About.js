import React, { Component } from 'react'
import { Typography, Row, Col, Image } from 'antd';


export default class About extends Component {
    render() {
        const { Title } = Typography;
        return (
            <Row>
                <Col span={24}>
            <div className="bg">
                <Row>
                    <Col span={12}>
                        <div className="pg">
                            <Title style={{ color: "#FFF" }}>Know Who I'M,</Title>
                            <Title level={3} style={{ color: "#FFF",marginLeft:50,marginRight:50 }}>Hi Everyone, I am Vishal Shukla, a aspiring Software Engineer from India. I am pursuing B.tech (ECE) from IIMT, Greater Noida UP. </Title>
                        </div>
                    </Col>
                    <Col span={12}>
                        <Image src="https://soumyajit.tech/static/media/about.aee0f771.png" preview={false} style={{ marginTop: 150}} />
                    </Col>
                </Row>
            </div>
            </Col>
            </Row>
        )
    }
}
