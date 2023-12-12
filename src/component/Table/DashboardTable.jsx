import React, { useEffect, useState } from 'react';
import { Space, Table, Tag } from 'antd';
import { Col } from "antd";
import './Table.css'
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    // render: (text) => <a>{text}</a>,
  },
  {
    title: 'Symbol',
    dataIndex: 'symbol',
    key: 'symbol',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  // {
  //   title: 'Tags',
  //   key: 'tags',
  //   dataIndex: 'tags',
  //   render: (_, { tags }) => (
  //     <>
  //       {tags.map((tag) => {
  //         let color = tag.length > 5 ? 'geekblue' : 'green';
  //         if (tag === 'loser') {
  //           color = 'volcano';
  //         }
  //         return (
  //           <Tag color={color} key={tag}>
  //             {tag.toUpperCase()}
  //           </Tag>
  //         );
  //       })}
  //     </>
  //   ),
  // },
  {
    title: 'market cap',
    key: 'market_cap',
    dataIndex: 'market_cap',
    // render: (_, record) => (
    //   <Space size="middle">
    //     <a>Invite {record.name}</a>
    //     <a>Delete</a>
    //   </Space>
    // ),
  },
];



export const DashboardTable = (props) => {
  const { Column, ColumnGroup } = Table;
  const { coins} = props 
  const [tableData,settableData] = useState([])
  useEffect(()=>{
    if(coins){
      let arr= []
      let data = coins?.map((item)=>{
        return { 
          name : item.name,
          symbol : item.symbol,
          price : item.quote.USD.price.toFixed(3),
          market_cap : item.quote.USD.price.toFixed(3)
        }
      })
      console.log("++++++++++++_+_+__+_+_+_=",data)
      settableData(data)
    }

  },[coins])
  return (
  <>
  <Col className='table-bod' span={24}>
    <Table bodyStyle={{color : "red"}}  dataSource={tableData}  pagination={{
          position: ['bottomCenter'],
          defaultPageSize : ['5'],
          pageSizeOptions :['3','5','10']
        }}>

   
      <Column title="SYMBOL"  width={150}  type={'danger'} columns ={{}} dataIndex="symbol" key="symbol" />
      <Column title="NAME" dataIndex="name" key="name" />
    
    <Column title="PRICE" dataIndex="price" key="price" />
    <Column title="MARKET CAP" dataIndex="market_cap" key="market_cap" />
    
  </Table>
  </Col>
    
  </>
  )
}
