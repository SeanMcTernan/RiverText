"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.textFormatter = void 0;
//Extract the river same from potential surrounding text.
const riversArray_1 = require("./riversArray");
exports.textFormatter = (text) => {
    for (let i = 0; i != riversArray_1.rivers.length; i++) {
        const river = riversArray_1.rivers[i];
        if (text.indexOf(river) != -1) {
            return river;
        }
    }
    return null;
};
