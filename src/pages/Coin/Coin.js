import React, { useEffect, useState } from "react";
import { Image } from "antd";
import "./coin.css";
import { useParams } from "react-router-dom";
import { getIndividualCoin, getCoin } from "../../api/Api";
import { LodingSpinner } from "../../component/Spin/LodingSpinner";

export const Coin = () => {
  const [coinData, setCoinData] = useState({});
  const [loding, setLoding] = useState(false);

  let { id } = useParams();

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
  }, []);
  return (
    <>
      {loding ? (
        <LodingSpinner />
      ) : (
        <div className="coin-card-body">
          <span style={{ width: "30%", textAlign: "center" }}>
            <br />
            <Image width={150} src={coinData?.logo} />
            <h2>{coinData?.name}</h2>
            <h3>RANK : {coinData?.cmc_rank}</h3>
            <h5>DESCRIPTION : {coinData?.description}</h5>
            <h5>MAX SUPPLY : {coinData?.max_supply}</h5>
            {/* <p>DEscription : {coinData?.description}</p> */}
          </span>
          <span style={{ width: "30%", textAlign: "LEFT" }}>
            <h5>
              PRICE : <b className="values">{coinData?.quote?.USD?.price}</b>
            </h5>
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
      )}
    </>
  );
};
