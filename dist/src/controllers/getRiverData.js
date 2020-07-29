"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRiverData = void 0;
const axios_1 = __importDefault(require("axios"));
const https = __importStar(require("https"));
//Create HTTP agent to bypass SSL requirement
const instance = axios_1.default.create({
    httpsAgent: new https.Agent({
        rejectUnauthorized: false
    })
});
const station = '08CE001';
exports.getRiverData = (req, res) => {
    const river = req.query.text.toLowerCase();
    instance
        .get(`https://vps267042.vps.ovh.ca/scrapi/station/${station}/flow/?startDate=2020-07-27&endDate=2020-07-27&resultType=history&key=-MAOwfOvJnlnoP8VzXiX`)
        .then(riverData => {
        const currentLevel = riverData.data.message.history.pop();
        res.json({ rivers: river, level: currentLevel.value, date: currentLevel.date });
    })
        .catch(err => {
        console.log(err);
    });
};
