"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRiverID = void 0;
//Pull the corresponding station ID for the requested river
exports.getRiverID = (river) => {
    let riverID;
    switch (river) {
        case 'stikine':
            riverID = '08CE001';
            break;
        case 'elk':
            riverID = '08NK002';
            break;
        case 'spilli':
            riverID = '08NA011';
            break;
        case 'spillimacheen':
            riverID = '08NA011';
            break;
        case 'homathko':
            riverID = '08GD004';
            break;
        default:
            riverID = null;
    }
    return riverID;
};
