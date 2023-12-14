import React, { useEffect,useState } from 'react'
import { useLoaderData } from "react-router-dom";
import {  Row } from 'antd';
import './Dashboard.css';
import { Cards } from '../Cards/Cards';
import { DashboardTable } from '../Table/DashboardTable';

export const Dashboard = () => {
    const [coins,setcoins] = useState([])
    const [cardsDetails,setCardsDetails] = useState([])
    let data = useLoaderData();
    
    useEffect(()=>{
        if(data){
            data?.sort((a,b)=>{ return a.cmc_rank - b.cmc_rank})
            let cardsData = data?.filter((item)=> { return ['BTC','ETH','USDT','BNB','DOGE'].includes(item.symbol)})
            setcoins(data)
            setCardsDetails(cardsData)
        }

    },[data])


  return (
    <>
    <br />
    <div className='cards'>
    <Row gutter={16}>
        <Cards coins={coins} cardsDetails={cardsDetails}/> 
    </Row>
    <br/>
    <Row gutter={16}>
      <DashboardTable  coins={coins}/>
    </Row>
    </div>
    </>
  )
}
