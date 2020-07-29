import { RequestHandler } from 'express';
import moment from 'moment';
import { axiosRequest } from './getCurrentFlow';
import { getRiverID } from './getRiverID';


export const getRiverData: RequestHandler = async (req, res) => {
    const currentTime = moment().format('YYYY-MM-DD');
    const river = (req.query as { text: string }).text.toLowerCase().trim();
    const riverID = getRiverID(river);
    if (riverID) {
        axiosRequest(riverID, currentTime)
            .then(riverData => {
                const currentLevel = riverData.data.message.history.pop();
                res.json({ riverID: riverID, river: river, level: currentLevel!.value, date: currentLevel!.date });
            })
            .catch(err => {
                console.log(err);
            })
    }
}

