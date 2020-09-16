//Send a message using SimpleTexting API
import axios from 'axios';
import * as https from 'https';
import { SMSDataResponse } from '../models/SendSMSResponse';

const apiKey = process.env.SIMPLETEXTINGAPIKEY
//Create an new agent for Axios to avoid an SSL error. 
const instance = axios.create({
    httpsAgent: new https.Agent({
        rejectUnauthorized: false
    })
});

export const sendMessage = (number: string, message: string): void => {
    instance
        .post<SMSDataResponse>(`https://tollfree.simpletexting.com/v1/send?token=${apiKey}&phone=${number}&message=${message}`)
        .then((response) => {
            console.log(`SimpleTexing Server responded with message: ${response.data.message}`);
        })
        .catch(err => {
            console.log(err);
        })
}

