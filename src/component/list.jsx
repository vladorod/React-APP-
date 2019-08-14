import React, { Component } from 'react';
import { Table, Checkbox, Pagination, Typography } from 'antd';

const { Column } = Table;
const { Paragraph } = Typography;

class Mine extends Component {
    state = {
        dir: "",
        field: "",
        page: "1"
    }

    newLoadData(e) {
        this.setState({ page: String(e) },
            () => this.props.loadData(String(e), this.state.dir, this.state.field));
    }

    onChange(status, text, id) {
        this.props.editTask(status, text, id)
    }

    editAdmin(text, obj) {
        if (this.props.user === "admin") {
            return (<Paragraph key={obj.id} style={{ margin: 0, width: 100 + "%", border: 0, display: "block" }} editable={{ onChange: (str) => this.onChange(obj.status, str, obj.id) }}>{text}</Paragraph>)
        } else {
            return <span key={obj.id}>{text}</span>
        }
    }

    editStatus(status) {
        if (status === 0) {
            return 10
        } else return 0
    }

    editAdminCheckbox(status, text, id) {

        if (this.props.user === "admin") {
            return <Checkbox key={id} checked={status === 10} onChange={() => this.onChange(this.editStatus(status), text, id)}></Checkbox>
        } else {
            return <Checkbox key={id} checked={status === 10} disabled></Checkbox>
        }
    }

    sort(e) {
        if (e.order === "ascend") {
            this.setState({ dir: "asc", field: e.field },
                () => this.props.loadData(this.state.page, this.state.dir, this.state.field))

        } else if (e.order === "descend") {
            this.setState({ dir: "desc", field: e.field },
                () => this.props.loadData(this.state.page, this.state.dir, this.state.field));

        } else {
            this.setState({ dir: "", field: "" },
                () => this.props.loadData(this.state.page, this.state.dir, this.state.field));

        }

    }

    render() {
        return (
            <div>
                <Table onChange={(a, b, c) => this.sort(c)} pagination={false} footer={() => <Pagination onChange={(e) => this.newLoadData(e)} defaultCurrent={1} total={+this.props.task_count / 3 * 10} />} size="small" currentPageData="1" dataSource={this.props.data}>
                    <Column
                        key="UserName"
                        sorter={true}
                        title="User Name"
                        dataIndex="username" />
                    <Column
                        key="Email"
                        sorter={true}
                        title="Email"
                        dataIndex="email" />
                    <Column
                        key="text"
                        sorter={true}
                        title="Text"
                        render={this.editAdmin.bind(this)} dataIndex="text" />
                    <Column
                        key="status" sorter={true} title="Done" dataIndex="status" render={(text, e) => this.editAdminCheckbox(e.status, e.text, e.id)}/>
                </Table>
            </div>
        )
    }
}

export default Mine