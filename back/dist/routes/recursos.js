"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const recursos = []; //Array de tipo IRecurso
const router = (0, express_1.Router)();
router.post("/", (req, res) => {
    const nuevoRecurso = req.body;
    recursos.push(nuevoRecurso);
    res.status(200).send(nuevoRecurso);
});
exports.default = router;
