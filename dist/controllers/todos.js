"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTodos = void 0;
const TODOS = [];
exports.getTodos = (req, res) => {
    res.json({ todos: TODOS });
};
