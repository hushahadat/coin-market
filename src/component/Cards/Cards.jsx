import React, { useEffect,useState } from 'react'
import { useLoaderData } from "react-router-dom";
import { Card, Col, Row } from 'antd';
import { getAllCoins } from '../../api/Api';
import './Cards.css';
import {RiseOutlined,FallOutlined } from '@ant-design/icons'

export const Cards = (props) => {
    const {coins}= props
  return (
    <>
    
    <Col span={6}>
      <Card title={ <span style={{display:'flex', justifyContent:"space-between"}}> <p> <img alt="bitcoin" src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png" height={20} width={20}/>  {coins[0]?.name.toUpperCase()} </p> <p className='time-box'>24h</p></span>} hoverable={true} bordered={false} headStyle={{backgroundColor:'#251c4c', color:'white'}} bodyStyle={{paddingTop: '1px', backgroundColor:'#251c4c'}} className='card-body'>
       <p style={{fontSize:'20px',marginTop:'0px', marginBottom :'0', paddingBottom : '0'}}>$ {coins[0]?.quote?.USD?.price.toFixed(2)} </p>
       {coins[0]?.quote?.USD?.percent_change_24h >= 0 ? <p style={{fontSize:'13px', margin :'0', padding : '0', color:'green'}}> {coins[0]?.quote?.USD?.percent_change_24h.toFixed(2)} <RiseOutlined /></p> :
         <p style={{fontSize:'13px', margin :'0', padding : '0',  color:'red'}}> {coins[0]?.quote?.USD?.percent_change_24h.toFixed(2)} <FallOutlined /> </p> } 
      </Card>
    </Col>

    <Col span={6}>
      <Card title={coins[1]?.name.toUpperCase()} hoverable={true} bordered={false} headStyle={{backgroundColor:'#251c4c', color:'white'}} bodyStyle={{paddingTop: '1px', backgroundColor:'#251c4c'}} className='card-body'>
       <p style={{fontSize:'20px',marginTop:'0px', marginBottom :'0', paddingBottom : '0'}}>$ {coins[1]?.quote?.USD?.price.toFixed(2)} </p>
       {coins[1]?.quote?.USD?.percent_change_24h >= 0 ? <p style={{fontSize:'13px', margin :'0', padding : '0', color:'green'}}> {coins[1]?.quote?.USD?.percent_change_24h.toFixed(2)} <RiseOutlined /></p> :
         <p style={{fontSize:'13px', margin :'0', padding : '0',  color:'red'}}> {coins[1]?.quote?.USD?.percent_change_24h.toFixed(2)} <FallOutlined /> </p> } 
      </Card>
    </Col>

    <Col span={6}>
      <Card title={coins[2]?.name.toUpperCase()} hoverable={true} bordered={false} headStyle={{backgroundColor:'#251c4c', color:'white'}} bodyStyle={{paddingTop: '1px', backgroundColor:'#251c4c'}} className='card-body'>
       <p style={{fontSize:'20px',marginTop:'0px', marginBottom :'0', paddingBottom : '0'}}>$ {coins[2]?.quote?.USD?.price.toFixed(2)} </p>
       {coins[2]?.quote?.USD?.percent_change_24h >= 0 ? <p style={{fontSize:'13px', margin :'0', padding : '0', color:'green'}}> {coins[2]?.quote?.USD?.percent_change_24h.toFixed(2)} <RiseOutlined /></p> :
         <p style={{fontSize:'13px', margin :'0', padding : '0',  color:'red'}}> {coins[2]?.quote?.USD?.percent_change_24h.toFixed(2)} <FallOutlined /> </p> } 
      </Card>
    </Col>

    <Col span={6}>
      <Card title={coins[3]?.name.toUpperCase()} hoverable={true} bordered={false} headStyle={{backgroundColor:'#251c4c', color:'white'}} bodyStyle={{paddingTop: '1px', backgroundColor:'#251c4c'}} className='card-body'>
       <p style={{fontSize:'20px',marginTop:'0px', marginBottom :'0', paddingBottom : '0'}}>$ {coins[3]?.quote?.USD?.price.toFixed(2)} </p>
       {coins[3]?.quote?.USD?.percent_change_24h >= 0 ? <p style={{fontSize:'13px', margin :'0', padding : '0', color:'green'}}> {coins[3]?.quote?.USD?.percent_change_24h.toFixed(2)} <RiseOutlined /></p> :
         <p style={{fontSize:'13px', margin :'0', padding : '0',  color:'red'}}> {coins[3]?.quote?.USD?.percent_change_24h.toFixed(2)} <FallOutlined /> </p> } 
      </Card>
    </Col>
  
    </>
  )
}
