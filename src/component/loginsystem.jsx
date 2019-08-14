import React, { Component } from 'react'
import { Button } from "antd";

class LoginSystem extends Component {
    render() {
        if (this.props.login === "") {
            return (
                <span style={{ margin: 10 + "px" }}>
                    <Button onClick={this.props.action}>LOGIN</Button>
                </span>)
        } else return (
            <span style={{ margin: 10 + "px", color: "white" }}>
                <span style={{ margin: 10 + "px", color: "white" }}>Hi, {this.props.login}</span>
                <Button onClick={() => this.props.setUser("")} type="danger">EXIT</Button>
            </span>
        )
    }
}

export default LoginSystem;