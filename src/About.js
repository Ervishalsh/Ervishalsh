import React, { Component } from 'react'
import { Card, Typography, Row, Col, Image } from 'antd';


export default class About extends Component {
    render() {
        const img = "https://images.unsplash.com/photo-1623284577359-a0130bb9a86d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
        const { Title } = Typography;
        const mystyle = {
            color: "white",
            padding: "10px",

        };
        return (
            <div style={{ backgroundImage: "url(" + img + ")", backgroundSize: "cover", borderWidth: 0, backgroundRepeat: "no-repeat" }}>
                <Row>
                    <Col span={12} style={{}}>
                        <div>
                            <Title style={mystyle}>Hi There, I am
                            Vishal Shukla
                    </Title>
                            <Title style={mystyle}>Hi There, I am
                            Vishal Shukla
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
