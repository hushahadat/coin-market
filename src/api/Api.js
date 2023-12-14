const BASE_URL = "http://localhost:3022/api"
export const getAllCoins =async  () =>{
    
    let url2 = `${BASE_URL}/coin/getAllCoin`;
    try{
        let options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            // body: JSON.stringify('')
        };
        let allData = await fetch(url2,options)
        return allData

    }catch(er){
        console.log("ererer",er)
        return er
    }
    
}

export const getIndividualCoin = async (body)=>{
    let url2 = `${BASE_URL}/coin/getIndividualCoin`;
    try{
        let option ={
            method : "post",
            headers: {
                'Content-Type': 'application/json',
            },
            body : JSON.stringify(body)
        }
        

        let res =  await fetch(url2,option)
        let ress = await res.text()
        return  JSON.parse(ress)
    }catch(er){
        console.log("er",er);
    }

}