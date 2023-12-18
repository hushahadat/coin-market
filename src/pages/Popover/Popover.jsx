import { useState,useEffect } from "react";
import { Button, Modal,Image } from 'antd';
import { getIndividualCoin, getCoin } from "../../api/Api";
import { LodingSpinner } from "../../component/Spin/LodingSpinner";
import './Popover.css'

export const PopOver = (props) => {
  const { show , setShow, id } = props;
  const [coinData, setCoinData] = useState({});
  const [loding, setLoding] = useState(false);
  const getCoinData = async () => {
    let data1 = await getIndividualCoin({ key: id });
    let data2 = await getCoin({ key: id });
    setCoinData({ ...data1[id][0], ...data2[id][0] });
    setLoding(false);
    
  };


  useEffect(() => {
    if (Object.entries(coinData).length == 0) {
      setLoding(true);
      getCoinData();
      
    }
    return () => {};
  }, [id]);

  return (
    <>
    {loding ? (
        <LodingSpinner />
        ) : (
      <Modal
        title={<span className="img-span"><img  className="img-logo" width={40} src={coinData?.logo} /> <h1>{coinData?.name}</h1> </span>}
        open={show}
        width ={900}
        onOk={()=>{setShow(false)}}
        onCancel={()=>{setShow(false)}}
        okButtonProps={{
          disabled: false,
        }}
        cancelButtonProps={{
          disabled: true,
        }}
      >
        
        <>
         <div className="model-body">
            <span >
            <h2>RANK : {coinData?.cmc_rank}</h2>
           
            <h5>MAX SUPPLY : {coinData?.max_supply}</h5>
            <h5>
              PRICE : <b className="values">{coinData?.quote?.USD?.price}</b>
            </h5>

            </span>
            <span style={{ width: "30%", textAlign: "LEFT" }}>
            
            <h5>
              MARKET CAP :{" "}
              <b className="values">{coinData?.quote?.USD?.market_cap}</b>
            </h5>
            <h5>
              MARKET CAP DOMINANCE :{" "}
              <b className="values">
                {coinData?.quote?.USD?.market_cap_dominance}
              </b>
            </h5>
            <h5>
              VOLUME CHANGE IN 24H :{" "}
              <b className="values">
                {coinData?.quote?.USD?.volume_change_24h}
              </b>
            </h5>
            <h5>
              PERCENTAGE CHANGE IN 1H :{" "}
              <b className="values">
                {" "}
                {coinData?.quote?.USD?.percent_change_1h}
              </b>
            </h5>
            <h5>
              PERCENTAGE CHANGE IN 30D :{" "}
              <b className="values">
                {coinData?.quote?.USD?.percent_change_30d}
              </b>
            </h5>
          </span>

         </div>
          <h5 className="description">DESCRIPTION : {coinData?.description}</h5>
        </>
      
      </Modal>
        )}
    </>
  );
};
