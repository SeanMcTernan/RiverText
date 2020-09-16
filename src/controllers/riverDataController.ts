//Process incoming data requests and return corresponding message. 
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
                console.log(`Scrapi server responded with status code: ${riverData.data.code}`);
                if (riverData.data.message.history as History) {
                    const currentLevel = riverData.data.message.history.pop() as History;
                    const units = riverData.data.message.unit as string;
                    const message = messageConstructor(river, currentLevel, units);
                    sendMessage(number, message);
                    res.json({ message });

                } else {
                    sendMessage(number, 'No river information available at this time.');
                    res.json({ message: 'No river information available.' });
                }
            })
            .catch(err => {
                sendMessage(number, 'No river information available at this time.');
                console.log(err);
            })
    } else {
        sendMessage(number, 'River not listed. Please try another.');
        res.json({ error: 'River not listed. Please try another.' });
    }
}