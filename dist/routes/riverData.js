"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getRiverData_1 = require("../controllers/getRiverData");
const router = express_1.Router();
router.get('/', getRiverData_1.getRiverData);
exports.default = router;
