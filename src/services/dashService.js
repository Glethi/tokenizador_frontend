import axios from 'axios';

export async function getData (model) {
    try{
        const response = await axios({
            url: "http://localhost:8000/api/"+model,
            method: 'GET'
        })
    return response;
    }catch(e){
        console.log(e);
    }
}