"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const whatsapp_controllers_1 = require("../controllers/whatsapp.controllers");
class WhatsappRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post("/send-message", whatsapp_controllers_1.whatsappController.sendMessage);
    }
}
const whatsappRoutes = new WhatsappRoutes();
exports.default = whatsappRoutes.router;
