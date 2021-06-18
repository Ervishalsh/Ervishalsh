import React, { Component } from 'react'
import { Typography, Row, Col, Image } from 'antd';


export default class Home extends Component {
    render() {
        const { Title } = Typography;
        const mystyle = {
            color: "white",
            padding: "10px",

        };
        return (
            <div className="bg">
                <Row>
                    <Col span={12} style={{}}>
                        <div className="hm">
                            <Title style={mystyle}>Hi There,
                    </Title>
                            <Title style={mystyle}>Hi There, I am
                            Vishal Shukla
                    </Title>
                         
                        </div>
                    </Col>
                    <Col span={12}>
                        <Image src="https://soumyajit.tech/static/media/home-main.541f8179.svg" preview={false} />
                    </Col>
                </Row>
            </div>
        )
    }
}
