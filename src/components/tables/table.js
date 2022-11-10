import React from 'react';
import {Table, Typography, Image} from "antd";
import { pokemons } from '../../data'


const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <Typography.Text  copyable>{text}</Typography.Text>
    },
    {
        title: 'number',
        dataIndex: 'number',
        key: 'number',
    },
    {
        title: 'Class',
        dataIndex: 'classification',
        key: 'class',
        filters: [
            {
                text: 'Speed Pokemon',
                value: 'Speed Pokemon'
            },
            {
                text: 'Lizard Pokemon',
                value: 'Lizard Pokemon'
            },
            {
                text: 'Flame Pokemon',
                value: 'Flame Pokemon'
            },
            {
                text: 'Seed Pokemon',
                value: 'Seed Pokemon'
            },
        ],
        onFilter: (value, item) => item.classification.includes(value)
    },
    {
        title: 'Rate',
        dataIndex: 'fleeRate',
        key: 'fleeRate',
        sorter: (a, b) => a.fleeRate - b.fleeRate,

    },
    {
        title: 'Image',
        dataIndex: 'image',
        key: 'image',
        render: (image) => <Image src={image} alt="pokemon" width={150} />
    },
]


const dataSource = pokemons.map(item => ({...item, key: item.id }) )





const _Table = ({rows = 10}) => {
    return (
        <Table
            dataSource={dataSource}
            columns={columns}
            pagination={{
                pageSize: rows,
                // defaultPageSize: '2',
                // showSizeChanger: true,
                // pageSizeOptions: [5,10,15,20],
            }}
        />
    );
};

export default _Table;
