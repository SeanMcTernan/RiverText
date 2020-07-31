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
const moment_1 = __importDefault(require("moment"));
const getCurrentFlow_1 = require("./getCurrentFlow");
const getRiverID_1 = require("./getRiverID");
const messageConstructor_1 = require("./messageConstructor");
const textFormatter_1 = require("./textFormatter");
exports.getRiverData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const currentTime = moment_1.default().format('YYYY-MM-DD');
    const text = req.query.text.toLowerCase().trim();
    const river = textFormatter_1.textFormatter(text);
    const number = req.query.from;
    if (river) {
        const riverID = getRiverID_1.getRiverID(river);
        getCurrentFlow_1.axiosRequest(riverID, currentTime)
            .then(riverData => {
            const currentLevel = riverData.data.message.history.pop();
            const units = riverData.data.message.unit;
            const message = messageConstructor_1.messageConstructor(river, currentLevel, units);
            res.json({ message });
            // sendMessage(number, message);
        })
            .catch(err => {
            console.log(err);
        });
    }
    else {
        // sendMessage(number, 'No river information available.');
        res.json({ error: 'No river information available.' });
    }
});
