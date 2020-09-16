"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Routes for the Express Server
const express_1 = require("express");
const riverDataController_1 = require("../controllers/riverDataController");
const router = express_1.Router();
router.get('/webhooks', riverDataController_1.getRiverData);
exports.default = router;
