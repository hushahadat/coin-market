// const BASE_URL = "http://localhost:3022/api"
const BASE_URL = "https://in.hussain.co.in/api";
export const getAllCoins = async () => {
  let url2 = `${BASE_URL}/coin/getAllCoin`;
  try {
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CMC_PRO_API_KEY": "9234M-8709C-8298S-9709T",
      },
      // body: JSON.stringify('')
    };
    let allData = await fetch(url2, options);
    allData = await allData.text()
    return JSON.parse(allData);
  } catch (er) {
    console.log("_______", er);
    return er;
  }
};

export const getIndividualCoin = async (body) => {
  let url2 = `${BASE_URL}/coin/getIndividualCoin`;
  try {
    let option = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "X-CMC_PRO_API_KEY": "9234M-8709C-8298S-9709T",
      },
      body: JSON.stringify(body),
    };

    let res = await fetch(url2, option);
    let ress = await res.text();
    return JSON.parse(ress);
  } catch (er) {
    console.log("er", er);
  }
};

export const getCoin = async (body) => {
  let url2 = `${BASE_URL}/coin/getCoin`;
  try {
    let option = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "X-CMC_PRO_API_KEY": "9234M-8709C-8298S-9709T",
      },
      body: JSON.stringify(body),
    };

    let res = await fetch(url2, option);
    let ress = await res.text();
    return JSON.parse(ress);
  } catch (er) {
    console.log("er", er);
  }
};
