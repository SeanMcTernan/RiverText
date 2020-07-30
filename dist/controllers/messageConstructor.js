"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageConstructor = void 0;
const capitalize = (riverName) => riverName.charAt(0).toUpperCase() + riverName.slice(1);
exports.messageConstructor = (river, currentLevel, units) => {
    return `Name: ${capitalize(river)}%0D%0ACurrent Level: ${currentLevel.value}${units}%0D%0ALast Reading: ${encodeURI(currentLevel.date)}`;
};
