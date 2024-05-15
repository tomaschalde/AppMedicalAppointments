"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const app = express();
const indexRouter_1 = __importDefault(require("./routes/indexRouter"));
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(indexRouter_1.default);
exports.default = app;
