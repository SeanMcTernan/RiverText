//Call Public API for Flow data on selected river
import axios from 'axios';
import { RiverDataResponse } from '../models/RiverDataResponse';
import * as https from 'https';

const apiKey = process.env.SCRAPAPI

//Create an new agent for Axios to avoid an SSL error. 
const instance = axios.create({
    httpsAgent: new https.Agent({
        rejectUnauthorized: false
    })
});

export const axiosRequest = async (station: string, currentTime: string): Promise<any> => {
    return (
        instance
            .get<RiverDataResponse>(`https://vps267042.vps.ovh.ca/scrapi/station/${station}/flow/?startDate=${currentTime}&endDate=${currentTime}&resultType=history&key=${apiKey}`))
}

