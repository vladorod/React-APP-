import React, { Component } from 'react'
import Mine from '../component/list';
import {connect} from 'react-redux';
import * as mapDispathchToProps from './../actions/index';
import { Button, Modal, Row , Col} from 'antd';
import 'antd/dist/antd.css';
import NormalLoginForm from './../component/login';
import LoginSystem from '../component/loginsystem';
import FormAddTask from '../component/FormAddTask';

class MineContainer extends Component{ 
  
    state = {
     visibleLogin: false,
     visibleAddTask: false,
    };

    showModalLogin = () => {
        if (this.state.visibleLogin === false) { 
        this.setState({
            visibleLogin: true,
        });
    } else this.setState({visibleLogin: false}); 
      };
    showModalAddTask = () => {
        if (this.state.visibleAddTask === false) { 
        this.setState({
            visibleAddTask: true,
        });
    } else this.setState({visibleAddTask: false}); 
      };

    componentWillMount(){ 
        this.props.loadData('1')
    }

    login() { 
      let login = this.state.inputLogin;
      let password = this.state.inputLogin; 

      this.state.users.forEach(e => {
        if (e.login === login && e.password === password)
        { 
          this.setState({user: e.login})
          this.showModalLogin();
        }     
      });
    }

   
    render() { 
        return (
             <div>
                 <Row type="flex" style={{background: "black", marginBottom: 40 + "px"}}>
                   <Col div={4}> 
                   <LoginSystem setUser={this.props.setUser} login={this.props.login} action={this.showModalLogin} />
                   <Button onClick={this.showModalAddTask} style={{margin: 10 + "px"}}>ADD TASK</Button>
                   </Col>
                </Row>
                 <Mine editTask={this.props.editTask} user={this.props.login} data={this.props.data} loadData={this.props.loadData} task_count={this.props.task_count} ></Mine>
                 <Modal 
                 footer=""  
                 title="LOGIN"
                 visible={this.state.visibleLogin}
                 onCancel={this.showModalLogin}>
                 <NormalLoginForm users={this.props.users} setUser={this.props.setUser} showModal={this.showModalLogin}/>
                 </Modal>
                 <Modal 
                 footer=""  
                 title="ADD TUSK"
                 visible={this.state.visibleAddTask}
                 onCancel={this.showModalAddTask}>
                   <FormAddTask addTask={this.props.addTask} showModalAddTask={this.showModalAddTask} loadData={this.props.loadData}></FormAddTask>
                 </Modal>
                
             </div>
            )
    }
}

const mapStateToProps=(state)=> {
    return state
}

export default connect (mapStateToProps, mapDispathchToProps) (MineContainer) 