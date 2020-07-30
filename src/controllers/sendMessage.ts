//Send a message using SimpleTexting API
import axios from 'axios';
import * as https from 'https';

const apiKey = process.env.SIMPLETEXTINGAPIKEY
//Create an new agent for Axios to avoid an SSL error. 
const instance = axios.create({
    httpsAgent: new https.Agent({
        rejectUnauthorized: false
    })
});

export const sendMessage = (number: string, message: string): void => {
    instance
        .post(`https://tollfree.simpletexting.com/v1/send?token=${apiKey}&phone=${number}&message=${message}`)
        .catch(err => {
            console.log(err);
        })
}


