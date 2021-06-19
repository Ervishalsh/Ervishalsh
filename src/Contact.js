import React, { Component } from 'react'
import { Card, Row, Col, Space, Image, Typography } from 'antd'
import { PhoneOutlined, TwitterOutlined, LinkedinFilled, GithubFilled } from '@ant-design/icons'
import IMG from './IMG.jpg'

const { Title, Text } = Typography;

export default class Contact extends Component {
    render() {
        return (

            <div className="bg">
                <Row>
                    <Col span={12} offset={6} style={{ marginTop: 120, marginBottom: 20 }}>
                        <Card style={{ backgroundColor: "#F0F8FF" }}>
                            <Row>
                                <Col span={12}>
                                    <Image preview={false} src={IMG} />
                                </Col>
                                <Col span={12}>
                                    <div className="cs" >
                                        <Title label={2}>Vishal Shukla
                                        <div>
                                                <Text style={{ fontSize: 18 }} type="secondary">
                                                    Aspiring Software Developer
                                            </Text>
                                            </div>
                                        </Title>
                                        <a href="tel:+916306021177">
                                            <Title type="success" level={1}>
                                                <PhoneOutlined rotate={90} /> +91-6306021177
                                            </Title>
                                        </a>

                                        <Title level={5} type="danger">
                                            FIND ME ON
                                        </Title>

                                        <Space>
                                            <a href="https://www.linkedin.com/in/ervishalshukla">
                                                <LinkedinFilled style={{ fontSize: '24px' }} />
                                            </a>
                                            <a href="https://github.com/Ervishalsh">
                                                <Text>
                                                    <GithubFilled style={{ fontSize: '24px' }} />
                                                </Text>
                                            </a>
                                            <a href="https://twitter.com/VishalS02568419" >
                                                <TwitterOutlined style={{ fontSize: '24px' }} />
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