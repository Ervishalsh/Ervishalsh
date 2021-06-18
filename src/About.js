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
            <div style={{ height: '100%', backgroundImage: "url(" + img + ")", backgroundSize: "cover", borderWidth: 0, backgroundRepeat: "no-repeat" }}>
                <Row>
                    <Col span={12}>
                        <div style={{ marginTop: 200,alignContent:"center", justifyContent: "center", alignItems: "center", flexDirection: "column", display: "flex",flex:1 }}>
                            <Title style={{ color: "#FFF" }}>Know Who I'M,</Title>
                            <Title level={3} style={{ color: "#FFF",marginLeft:50,marginRight:50 }}>Hi Everyone, I am Vishal Shukla, an aspiring Software Engineer from India. I am pursuing B.tech (ECE) from IIMT, Greater Noida UP. </Title>
                        </div>
                    </Col>
                    <Col span={12}>
                        <Image src="https://soumyajit.tech/static/media/about.aee0f771.png" preview={false} />
                    </Col>
                </Row>
            </div>
        )
    }
}
