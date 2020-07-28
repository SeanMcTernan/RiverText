import { RequestHandler } from 'express';
import axios from 'axios';
import { RiverDataResponse } from '../models/RiverDataResponse';
import * as https from 'https';

//Create HTTP agent to bypass SSL requirement
const instance = axios.create({
    httpsAgent: new https.Agent({
        rejectUnauthorized: false
    })
});

const station = '08CE001';

export const getRiverData: RequestHandler = (req, res) => {
    instance
        .get<RiverDataResponse>(`https://vps267042.vps.ovh.ca/scrapi/station/${station}/flow/?startDate=2020-07-27&endDate=2020-07-27&resultType=history&key=-MAOwfOvJnlnoP8VzXiX`)
        .then(riverData => {
            const currentLevel = riverData.data.message.history.pop();
            res.json({ level: currentLevel!.value, date: currentLevel!.date });
        })
        .catch(err => {
            console.log(err);
        })
}
