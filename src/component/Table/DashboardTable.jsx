import React, { useEffect, useState } from 'react';
import { Space, Table, Tag } from 'antd';
import { Col } from "antd";
import './Table.css'
import {useNavigate } from "react-router-dom"


export const DashboardTable = (props) => {
  const navigate = useNavigate()
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
          market_cap : item.quote.USD.price.toFixed(3),
          total_supply : item.total_supply.toFixed(3),
          percent_change_1h : item.quote.USD.percent_change_1h.toFixed(3),
          percent_change_30d : item.quote.USD.percent_change_30d.toFixed(3)
        }
      })
      settableData(data)
    }
  },[coins])

  const onClickRow=(props)=>{
    console.log("2111111111212",props);
    navigate(`/dashboard/${props.symbol}`)
  }
  return (
  <>
  <Col  span={24}>
    <Table  dataSource={tableData}
            onRow={(record, rowIndex) => {
              return {
                onClick: (e)=>{onClickRow(record)}, // click row
              };
            }}
            rowClassName=''
          pagination={{
          position: ['bottomCenter'],
          defaultPageSize : ['5'],
          pageSizeOptions :['3','5','10'],
          
        }}>

   
      <Column align='center' title="SYMBOL"  dataIndex="symbol" key="symbol" />
      <Column align='center' title="NAME" dataIndex="name" key="name" />
    
    <Column align='center' title="PRICE" dataIndex="price" key="price" />
    <Column align='center' title="MARKET CAP" dataIndex="market_cap" key="market_cap" />
    
    <Column align='center' title="PERCENTAGE CHANGE 1H" dataIndex="percent_change_1h" key="percent_change_1h" />
    <Column align='center' title="PERCENTAGE CHANGE 30D" dataIndex="percent_change_30d" key="percent_change_30d" />
    <Column align='center' title="TOTAL SUPPLY" dataIndex="total_supply" key="total_supply" />
    
  </Table>
  </Col>
    
  </>
  )
}
