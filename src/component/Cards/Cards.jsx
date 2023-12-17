import React from "react";
import { Card, Col, Row } from "antd";
import "./Cards.css";
import { RiseOutlined, FallOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export const Cards = (props) => {
  const { cardsDetails: data } = props;
  const navigate = useNavigate();
  // const [data,setData] = useState([])
  const onClickRow = (props) => {
    // console.log("2111111111212",props);
    navigate(`/dashboard/${props}`);
  };

  // const apidata = async ()=>{
  //   if(cardsDetails){
  //     let cardsData = await getIndividualCoin({key : 'BTC,ETH,USDT,BNB,DOGE'})
  //     let finalData = cardsDetails?.map((items)=>{
  //       let key = items?.symbol
  //       let coin = cardsData[key]
  //       coin = coin[0]
  //       return {...items,logo :coin?.logo }
  //     })
  //     setData(finalData)
  //   }

  // }

  // useEffect(()=>{
  //   apidata()
  // },[cardsDetails])

  return (
    <>
      <Col span={6}>
        <Card
          title={
            <span className="card-span">
              {" "}
              <span className="img-span">
                {" "}
                <img
                  className="img-logo"
                  alt="bitcoin"
                  src={data[0]?.logo}
                  height={20}
                  width={20}
                />{" "}
                <p>{data[0]?.name.toUpperCase()} </p>
              </span>{" "}
              <p className="time-box">24h</p>
            </span>
          }
          onClick={()=>{onClickRow(data[0]?.symbol)}}
          hoverable={true}
          bordered={false}
          headStyle={{ backgroundColor: "#251c4c", color: "white" }}
          bodyStyle={{ paddingTop: "1px", backgroundColor: "#251c4c" }}
          className="card-body"
        >
          <p className="price-p">$ {data[0]?.quote?.USD?.price.toFixed(2)} </p>
          {data[0]?.quote?.USD?.percent_change_24h >= 0 ? (
            <p
              className="percentage-change"
              style={{
                color: "green",
              }}
            >
              {" "}
              {data[0]?.quote?.USD?.percent_change_24h.toFixed(2)}{" "}
              <RiseOutlined />
            </p>
          ) : (
            <p
              className="percentage-change"
              style={{
                color: "red",
              }}
            >
              {" "}
              {data[0]?.quote?.USD?.percent_change_24h.toFixed(2)}{" "}
              <FallOutlined />{" "}
            </p>
          )}
        </Card>
      </Col>

      <Col span={6}>
        <Card
          title={
            <span className="card-span">
              {" "}
              <span className="img-span">
                {" "}
                <img
                  className="img-logo"
                  alt="bitcoin"
                  src={data[1]?.logo}
                  height={20}
                  width={20}
                />{" "}
                <p>{data[1]?.name.toUpperCase()} </p>
              </span>{" "}
              <p className="time-box">24h</p>
            </span>
          }
          onClick={()=>{onClickRow(data[1]?.symbol)}}
          hoverable={true}
          bordered={false}
          headStyle={{ backgroundColor: "#251c4c", color: "white" }}
          bodyStyle={{ paddingTop: "1px", backgroundColor: "#251c4c" }}
          className="card-body"
        >
          <p className="price-p">$ {data[1]?.quote?.USD?.price.toFixed(2)} </p>
          {data[1]?.quote?.USD?.percent_change_24h >= 0 ? (
            <p
              className="percentage-change"
              style={{
                color: "green",
              }}
            >
              {" "}
              {data[1]?.quote?.USD?.percent_change_24h.toFixed(2)}{" "}
              <RiseOutlined />
            </p>
          ) : (
            <p
              className="percentage-change"
              style={{
                color: "red",
              }}
            >
              {" "}
              {data[1]?.quote?.USD?.percent_change_24h.toFixed(2)}{" "}
              <FallOutlined />{" "}
            </p>
          )}
        </Card>
      </Col>

      <Col span={6}>
        <Card
          title={
            <span className="card-span">
              {" "}
              <span className="img-span">
                {" "}
                <img
                  className="img-logo"
                  alt="bitcoin"
                  src={data[4]?.logo}
                  height={20}
                  width={20}
                />{" "}
                <p>{data[4]?.name.toUpperCase()} </p>
              </span>{" "}
              <p className="time-box">24h</p>
            </span>
          }
          onClick={()=>{onClickRow(data[4]?.symbol)}}
          hoverable={true}
          bordered={false}
          headStyle={{ backgroundColor: "#251c4c", color: "white" }}
          bodyStyle={{ paddingTop: "1px", backgroundColor: "#251c4c" }}
          className="card-body"
        >
          <p className="price-p">$ {data[4]?.quote?.USD?.price.toFixed(2)} </p>
          {data[4]?.quote?.USD?.percent_change_24h >= 0 ? (
            <p
              className="percentage-change"
              style={{
                color: "green",
              }}
            >
              {" "}
              {data[4]?.quote?.USD?.percent_change_24h.toFixed(2)}{" "}
              <RiseOutlined />
            </p>
          ) : (
            <p
              className="percentage-change"
              style={{
                color: "red",
              }}
            >
              {" "}
              {data[4]?.quote?.USD?.percent_change_24h.toFixed(2)}{" "}
              <FallOutlined />{" "}
            </p>
          )}
        </Card>
      </Col>

      <Col span={6}>
        <Card
          title={
            <span className="card-span">
              {" "}
              <span className="img-span">
                {" "}
                <img
                  className="img-logo"
                  alt="bitcoin"
                  src={data[3]?.logo}
                  height={20}
                  width={20}
                />{" "}
                <p>{data[3]?.name.toUpperCase()} </p>
              </span>{" "}
              <p className="time-box">24h</p>
            </span>
          }
          onClick={()=>{onClickRow(data[3]?.symbol)}}
          hoverable={true}
          bordered={false}
          headStyle={{ backgroundColor: "#251c4c", color: "white" }}
          bodyStyle={{ paddingTop: "1px", backgroundColor: "#251c4c" }}
          className="card-body"
        >
          <p className="price-p">$ {data[3]?.quote?.USD?.price.toFixed(2)} </p>
          {data[3]?.quote?.USD?.percent_change_24h >= 0 ? (
            <p
              className="percentage-change"
              style={{
                color: "green",
              }}
            >
              {" "}
              {data[3]?.quote?.USD?.percent_change_24h.toFixed(2)}{" "}
              <RiseOutlined />
            </p>
          ) : (
            <p
              className="percentage-change"
              style={{
                color: "red",
              }}
            >
              {" "}
              {data[3]?.quote?.USD?.percent_change_24h.toFixed(2)}{" "}
              <FallOutlined />{" "}
            </p>
          )}
        </Card>
      </Col>
    </>
  );
};
