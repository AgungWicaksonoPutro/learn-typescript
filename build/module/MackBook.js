"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseLaptop_1 = __importDefault(require("./BaseLaptop"));
class Mackbook extends BaseLaptop_1.default {
    constructor(type, withNumeric, withTouchButton) {
        super("Mackbook", type, withNumeric, withTouchButton);
    }
}
exports.default = Mackbook;
