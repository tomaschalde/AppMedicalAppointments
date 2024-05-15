"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const usersRouter_1 = require("./usersRouter");
const appointmentsRouter_1 = require("./appointmentsRouter");
router.use('/users', usersRouter_1.userRouter);
router.use('/appointments', appointmentsRouter_1.appointmentsRouter);
exports.default = router;
