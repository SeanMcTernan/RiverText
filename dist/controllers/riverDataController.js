"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRiverData = void 0;
const moment_1 = __importDefault(require("moment"));
const getCurrentFlow_1 = require("./getCurrentFlow");
const getRiverID_1 = require("./getRiverID");
exports.getRiverData = async (req, res) => {
    const currentTime = moment_1.default().format('YYYY-MM-DD');
    const river = req.query.text.toLowerCase().trim();
    const riverID = getRiverID_1.getRiverID(river);
    if (riverID) {
        getCurrentFlow_1.axiosRequest(riverID, currentTime)
            .then(riverData => {
            const currentLevel = riverData.data.message.history.pop();
            res.json({ riverID: riverID, river: river, level: currentLevel.value, date: currentLevel.date });
        })
            .catch(err => {
            console.log(err);
        });
    }
};
