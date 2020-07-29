"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const riverData_1 = __importDefault(require("./routes/riverData"));
const app = express_1.default();
app.use(body_parser_1.json());
app.use('/riverdata', riverData_1.default);
app.use((err, req, res) => {
    res.status(500).json({ message: err.message });
});
app.listen(3000);
