import React, { useEffect,useState } from 'react'
import { useLoaderData } from "react-router-dom";
import {  Row } from 'antd';
import './Dashboard.css';
import { Cards } from '../Cards/Cards';

export const Dashboard = () => {
    const [coins,setcoins] = useState([])
    let data = useLoaderData();
    
    useEffect(()=>{
        if(data){
            data?.sort((a,b)=>{ return a.cmc_rank - b.cmc_rank})
            console.log("data",data);
            setcoins(data)
        }

    },[data])


  return (
    <>
    <h1 >Dashboard</h1>
    <div className='cards'>
    <Row gutter={16}>
        <Cards coins={coins} /> 
    </Row>
    </div>
    </>
  )
}
