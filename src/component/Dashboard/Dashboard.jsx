import React, { useEffect,useState } from 'react'
import { useLoaderData } from "react-router-dom";
import {  Row } from 'antd';
import './Dashboard.css';
import { Cards } from '../Cards/Cards';
import { DashboardTable } from '../Table/DashboardTable';

export const Dashboard = () => {
    const [coins,setcoins] = useState([])
    let data = useLoaderData();
    
    useEffect(()=>{
      console.log("+++++++++++++++++++++++++++++++++++=")
        if(data){
            data?.sort((a,b)=>{ return a.cmc_rank - b.cmc_rank})
            console.log("data",data);
            setcoins(data)
        }

    },[data])


  return (
    <>
    <br />
    <div className='cards'>
    <Row gutter={16}>
        <Cards coins={coins} /> 
    </Row>
    <br/>
    <Row gutter={16}>
      <DashboardTable  coins={coins}/>
    </Row>
    </div>
    </>
  )
}
