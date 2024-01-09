import React, { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";
import { Row } from "antd";
import "./Dashboard.css";
import { Cards } from "../../component/Cards/Cards";
import { DashboardTable } from "../../component/Table/DashboardTable";
import { getIndividualCoin } from "../../api/Api";
import { LodingSpinner } from "../../component/Spin/LodingSpinner";
import { PopOver } from "../Popover/Popover";
import { getAllCoins } from "../../api/Api";

const Dashboard = () => {
  const [loding, setLoding] = useState(false);
  const [coins, setcoins] = useState([]);
  const [cardsDetails, setCardsDetails] = useState([]);
  const [modelid,setModelId] = useState('')
  const [show, setShow] = useState(false);

  // let data = useLoaderData();

  const onClickRow = (props) => {
    // console.log("2111111111212",props);
    // navigate(`/dashboard/${props}`);
    setModelId(props)
    setShow(true)
  };

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

  useEffect( () => {
    const getData = async () =>{
      if ( coins?.length == 0) {
        let data =[]
        setLoding(true);
         data = await getAllCoins()
         data?.sort((a, b) => {
          return a.cmc_rank - b.cmc_rank;
        });
        let cardsData = data?.filter((item) => {
          return ["BTC", "ETH", "USDT", "BNB", "DOGE"].includes(item.symbol);
        });
        apidata(cardsData);
        setcoins(data);
      }
    }
     getData()
  }, []);

  return (
    <>
      {loding ? (
        <LodingSpinner />
      ) : (
        <>
          <br />
          <div className="cards">
            <Row gutter={16}>
              <Cards cardsDetails={cardsDetails} onClickRow={onClickRow}/>
            </Row>
            <br />
            <Row gutter={16}>
              <DashboardTable coins={coins} onClickRow={onClickRow}/>
            </Row>
          </div>
          {show && modelid?.length && <PopOver show={show} setShow={setShow} id={modelid}/>}
        </>
      )}
    </>
  );
};

export default Dashboard
