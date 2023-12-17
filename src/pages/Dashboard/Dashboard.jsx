import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Row } from "antd";
import "./Dashboard.css";
import { Cards } from "../../component/Cards/Cards";
import { DashboardTable } from "../../component/Table/DashboardTable";
import { getIndividualCoin } from "../../api/Api";
import { LodingSpinner } from "../../component/Spin/LodingSpinner";

export const Dashboard = () => {
  const [loding, setLoding] = useState(false);
  const [coins, setcoins] = useState([]);
  const [cardsDetails, setCardsDetails] = useState([]);
  let data = useLoaderData();

  const apidata = async (item) => {
    if (item) {
      let cardsData = await getIndividualCoin({ key: "BTC,ETH,USDT,BNB,DOGE" });
      let finalData = item?.map((items) => {
        let key = items?.symbol;
        let coin = cardsData[key];
        coin = coin[0];
        return { ...items, logo: coin?.logo };
      });
      setCardsDetails(finalData);
      setLoding(false);
    }
  };

  useEffect(() => {
    if (data && coins?.length == 0) {
      setLoding(true);
      data?.sort((a, b) => {
        return a.cmc_rank - b.cmc_rank;
      });
      let cardsData = data?.filter((item) => {
        return ["BTC", "ETH", "USDT", "BNB", "DOGE"].includes(item.symbol);
      });
      apidata(cardsData);
      setcoins(data);
    }
  }, [data]);

  return (
    <>
      {loding ? (
        <LodingSpinner />
      ) : (
        <>
          <br />
          <div className="cards">
            <Row gutter={16}>
              <Cards cardsDetails={cardsDetails} />
            </Row>
            <br />
            <Row gutter={16}>
              <DashboardTable coins={coins} />
            </Row>
          </div>
        </>
      )}
    </>
  );
};
