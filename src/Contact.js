import React, { Component } from 'react'
import { Card, Row, Col, Space, Image, Typography } from 'antd'
import { PhoneOutlined, TwitterOutlined, LinkedinFilled, GithubFilled } from '@ant-design/icons'

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
                                    <Image preview={false} src="https://lh3.googleusercontent.com/pONwLjdBq6yIghEkulADCQJebMJf5Bx36dzOfjVyG7zZR3s_8omTAcauXCOaQ7VJpQ0MnHiBmu23SwHFauSTM_0H4pYu_Md_jVQj_gOTnXaqIolu32JXFOjfxqUhSesvs2fF3bnUr1ympFiuTMznoO8JMRXYIgZIwaFSRjBX_-STC5FV75-WnCztBvhrTw9a8gukvPK3YHIKOAnQe51jvVyP59BiYPRGheRLC9qnJXGRjHwF-768s3swKfyyMMx6cJzFyPp7J8CzXGAdcVNRBxh9RV-UkJeMJXp8JkEC5TQy3_BTAlkK44hdYiTFvjZxh0MovOFjce4BHxL98mhYHtziN6hwE86a8KG5dLMrR3h8l0TnzrXdReSoWB26IQR5-5lRMWwJgPvZdB9aQTrLwxna4Wels91opjF1aYNxLJQsNPUGmF-w3DHjmB189XtUcYi9RMJNscRlPDQF7g63TPX2NPh4y5vZaSdj34DLgaJ0Kcs7vZkZeLtBYTaS1_kPYwUgUOjGcjrj8pecEqCeL6OxtvdkT_t3INTydN_R_S8f50plOnu2IHG2jAWFJ9GGRIc6idtDSPGsaGJp9vlJGvEwMEJNOxgojxZJ0DXwU809eNdvJD05O98RV9cgW6__6QvNyGf8ENAZWd3iEmzuZV0rj7kbjqwVCwrAWmig92JVMduJJyZYCSeoi-yX92e-k5ZxfepliBGKdWeue9T8CXA=w736-h981-no?authuser=0" />
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