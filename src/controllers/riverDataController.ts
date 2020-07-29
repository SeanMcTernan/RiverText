import { RequestHandler } from 'express';
import moment from 'moment';
import { axiosRequest } from './getCurrentFlow';

const station = '08CE001';

export const getRiverData: RequestHandler = async (req, res) => {
    const currentTime = moment().format('YYYY-MM-DD');
    const river = (req.query as { text: string }).text.toLowerCase();
    axiosRequest(station, currentTime)
        .then(riverData => {
            const currentLevel = riverData.data.message.history.pop();
            res.json({ rivers: river, level: currentLevel!.value, date: currentLevel!.date });
        })
        .catch(err => {
            console.log(err);
        })
}

