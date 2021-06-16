import React, { Component } from 'react'
import { Card } from 'antd'
import Title from 'antd/lib/skeleton/Title';


export default class Contact extends Component {
    render() {
        const img = "https://images.unsplash.com/photo-1623284577359-a0130bb9a86d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
    return(
        <div style={{ backgroundImage: "url(" + img + ")", backgroundSize: "cover", borderWidth: 0, backgroundRepeat: "no-repeat" }}>
        <Card style={{ backgroundColor: "transparent", borderWidth: 0 }}>
        </Card>
    </div>
)
}
}