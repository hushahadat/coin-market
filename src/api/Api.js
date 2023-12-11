const BASE_URL = "http://localhost:3022/api"
export const getAllCoins =async  () =>{
    
    let url2 = `${BASE_URL}/coin/getCoin`;
    try{
        // let options = {
        //     method: 'GET',
        //     headers : {
        //         'Content-Type' : 'application/json',
        //         'X-CMC_PRO_API_KEY' :'dd66eeb3-223b-418f-92ae-26d948063aef'
        //     }
        // }
        let options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            // body: JSON.stringify('')
        };
        let data = await fetch(url2,options)
        console.log("++++++++++++++++==data",data)
        return data

    }catch(er){
        console.log("ererer",er)
        return er
    }
    
}