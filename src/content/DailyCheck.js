import React, {Component} from 'react';
import './content.css';
import moment from 'moment';

import {DatePicker, Cascader, Select, Radio, InputNumber, Form, Button, Table, Tag, Space} from 'antd';
import Position from "../common/Position";
import Zhenjie from "../common/Zhenjie";

import axios from "axios";

const {RangePicker} = DatePicker;
const {Option} = Select;

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
            <>
                {tags.map(tag => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <Space size="middle">
                <a>Invite {record.name}</a>
                <a>Delete</a>
            </Space>
        ),
    },
];

const tableData = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];


function disabledDate(current) {
    // Can not select days before today and today
    return current && current > moment().endOf('day');
}


function handleChange(value) {
    console.log(`selected ${value}`);
}

const treatments = ['2+14????????????', '????????????', '????????????', '??????????????????', '??????????????????']


class DailyCheck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            province: null,
            city: null,
            county: null,
            data: [],
        };
    }

    formRef = React.createRef();

    onRestForm = () => {
        this.formRef.current.resetFields();
    }

    onFinish = (values) => {
        console.log('Received values of form: ', values);
        axios({
            url: '127.0.0.1:8080/index/test',
            data: {
                ccsl: values.ccsl,
                gkcs: values.gkcs,
                gkzt: values.gkzt,
                rkrq: values.rkrq,
                xszj: values.xszj,
            },
            method: 'post',
        }).then(
            res => {console.log(res)}
        ).catch(
            err => {
                console.log(err)
                this.setState({
                    data:tableData,
                })
            }

        )
    };

    render() {
        const dataList = Zhenjie;
        const treatmentList = treatments;
        return (
            <>
                <Form
                    labelCol={{
                        span: 4,
                    }}
                    wrapperCol={{
                        span: 8,
                    }}
                    layout="horizontal"
                    ref={this.formRef}
                    onFinish={this.onFinish}
                >
                    <Form.Item
                        label="????????????"
                        name="rkrq"
                    >
                        <RangePicker
                            disabledDate={disabledDate}
                        />
                    </Form.Item>
                    <Form.Item
                        label={"????????????"}
                        name={"lydq"}
                    >
                        <Cascader
                            style={{width: '100%'}}
                            options={Position}
                            placeholder="???????????????"
                        ></Cascader>
                    </Form.Item>
                    <Form.Item
                        label={"????????????"}
                        name={"xszj"}
                    >
                        <Select
                            style={{width: '100%'}}
                            placeholder="?????????????????????"
                            mode="multiple"
                            allowClear
                        >
                            {dataList && dataList.map(item => (
                                <Option key={item} value={item}/>
                            ))}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label={"????????????"}
                        name={"gkcs"}
                    >
                        <Select
                            mode="multiple"
                            allowClear
                            style={{width: '100%'}}
                            placeholder="?????????????????????"
                            onChange={handleChange}
                        >
                            {treatmentList && treatmentList.map(item => (
                                <Option key={item} value={item}/>
                            ))}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label={"????????????"}
                        name={"ccsl"}
                    >
                        <InputNumber min={0} style={{width: '100%'}}></InputNumber>
                    </Form.Item>
                    <Form.Item
                        label={"????????????"}
                        name={"gkzt"}
                    >

                        <Radio.Group
                            style={{width: '100%'}}
                        >
                            <Radio value={'?????????'}>?????????</Radio>
                            <Radio value={'?????????'}>?????????</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item
                        label={"??????"}
                    >
                        <Button htmlType="button" onClick={this.onRestForm}>
                            ??????
                        </Button>
                        <Button type="primary" htmlType="submit">
                            ??????
                        </Button>

                    </Form.Item>
                </Form>
                <div>
                    <h3>????????????</h3>
                    <Table columns={columns} dataSource={this.state.data} />
                </div>
            </>
        )
    }

}

export default DailyCheck;