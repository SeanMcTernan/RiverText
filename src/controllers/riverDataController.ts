//Process incoming data requests
import { RequestHandler } from 'express';
import moment from 'moment';
import { History } from '../models/RiverDataResponse';
import { axiosRequest } from './getCurrentFlow';
import { getRiverID } from './getRiverID';
import { messageConstructor } from './messageConstructor';
import { sendMessage } from './sendMessage';


export const getRiverData: RequestHandler = async (req, res) => {
    const currentTime = moment().format('YYYY-MM-DD');
    const river = (req.query as { text: string }).text.toLowerCase().trim();
    const number = (req.query as { from: string }).from;
    const riverID = getRiverID(river);
    if (riverID) {
        axiosRequest(riverID, currentTime)
            .then(riverData => {
                const currentLevel = riverData.data.message.history.pop() as History;
                const units = riverData.data.message.unit as string;
                const message = messageConstructor(river, currentLevel, units);
                res.json({ message });
                sendMessage(number, message);
            })
            .catch(err => {
                console.log(err);
            })
    } else {
        sendMessage(number, 'No river information available.');
        res.json({ error: 'No river information available.' });
    }
}