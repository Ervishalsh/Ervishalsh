import React, { Component } from 'react'
import { Card, Row, Col, Space, Image } from 'antd'
import { PhoneOutlined, TwitterOutlined,LinkedinFilled, GithubFilled } from '@ant-design/icons'
import Title from 'antd/lib/typography/Title';

export default class Contact extends Component {
    render() {
        const img = "https://images.unsplash.com/photo-1623284577359-a0130bb9a86d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
        return (

            <div style={{ backgroundImage: "url(" + img + ")", backgroundSize: "cover", borderWidth: 0, backgroundRepeat: "no-repeat" }}>
                <Row>
                    <Col span={12} offset={6} style={{ marginTop: 20, marginBottom: 20 }}>
                        <Card style={{ backgroundColor: "#F0F8FF"}}>
                            <Row>
                                <Col span={12}>
                                    <Image preview={false} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                </Col>
                                <Col span={12}>
                                    <div style={{marginTop:100,justifyContent:"center",alignItems:"center",flexDirection:"column",display:"flex"}}>
                                       <Title label={2}>Name: Vishal Shukla</Title>
                                        <h1 >FIND ME ON
                                     </h1>
                                        <a href="tel:+918527384897">
                                            <PhoneOutlined style={{ fontSize: '24px'}} /> +918527384897
                                      </a>
                                        <Space>
                                            <a href="https://twitter.com/VishalS02568419" >
                                                <TwitterOutlined style={{ fontSize: '24px'}} />
                                            </a>
                                            <a href="https://www.linkedin.com/in/ervishalshukla">
                                                <LinkedinFilled style={{ fontSize: '24px'}} />
                                            </a>
                                            <a href="https://github.com/Ervishalsh">
                                                <GithubFilled style={{ fontSize: '24px'}} />
                                            </a>
                                        </Space>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>

            </div>
        )
    }
}