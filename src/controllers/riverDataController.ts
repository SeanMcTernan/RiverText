//Process incoming data requests
import { RequestHandler } from 'express';
import moment from 'moment';
import { axiosRequest } from './getCurrentFlow';
import { getRiverID } from './getRiverID';
import { History } from '../models/RiverDataResponse';
import { messageConstructor } from './messageConstructor';
import { sendMessage } from './sendMessage';
import { textFormatter } from './textFormatter';


export const getRiverData: RequestHandler = async (req, res) => {
    const currentTime = moment().format('YYYY-MM-DD');
    const text = (req.query as { text: string }).text.toLowerCase().trim();
    const river = textFormatter(text);
    const number = (req.query as { from: string }).from;
    if (river) {
        const riverID = getRiverID(river);
        axiosRequest(riverID!, currentTime)
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