"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncFunction = void 0;
const asyncFunction = (delay, cb) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(cb);
        }, delay);
    });
};
exports.asyncFunction = asyncFunction;
