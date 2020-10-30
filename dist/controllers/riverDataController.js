"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRiverData = void 0;
const moment_timezone_1 = __importDefault(require("moment-timezone"));
const getCurrentFlow_1 = require("./getCurrentFlow");
const getRiverID_1 = require("./getRiverID");
const messageConstructor_1 = require("./messageConstructor");
const sendMessage_1 = require("./sendMessage");
const textFormatter_1 = require("./textFormatter");
exports.getRiverData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const currentTime = moment_timezone_1.default().tz("America/Vancouver").format('YYYY-MM-DD');
    console.log(`The date entered into the text request was: ${currentTime}`);
    const text = req.query.text.toLowerCase().trim();
    const river = textFormatter_1.textFormatter(text);
    const number = req.query.from;
    if (river) {
        const riverID = getRiverID_1.getRiverID(river);
        getCurrentFlow_1.axiosRequest(riverID, currentTime)
            .then(riverData => {
            console.log(`Scrapi server responded with status code: ${riverData.data.code}`);
            if (riverData.data.message.history) {
                const currentLevel = riverData.data.message.history.pop();
                const units = riverData.data.message.unit;
                const message = messageConstructor_1.messageConstructor(river, currentLevel, units);
                sendMessage_1.sendMessage(number, message);
                res.json({ message });
            }
            else {
                sendMessage_1.sendMessage(number, 'No river data available at this time.');
                res.json({ message: 'No river information available.' });
            }
        })
            .catch(err => {
            sendMessage_1.sendMessage(number, 'No river information available at this time.');
            console.log(err);
        });
    }
    else {
        sendMessage_1.sendMessage(number, 'River not listed. Please try another.');
        res.json({ error: 'River not listed. Please try another.' });
    }
});
