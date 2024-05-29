"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Whatsapp = void 0;
const whatsapp_web_js_1 = require("whatsapp-web.js");
const qrcode_terminal_1 = __importDefault(require("qrcode-terminal"));
class Whatsapp {
    constructor() {
        this.client = new whatsapp_web_js_1.Client({
            webVersionCache: {
                type: "remote",
                remotePath: "https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2412.54.html",
            },
            authStrategy: new whatsapp_web_js_1.LocalAuth(),
        });
        this.client.on("ready", () => {
            console.log("Client is ready!");
        });
        this.client.on("qr", (qr) => {
            qrcode_terminal_1.default.generate(qr, { small: true });
        });
        this.client.initialize();
    }
}
exports.Whatsapp = Whatsapp;
const whatsapp = new Whatsapp();
exports.default = whatsapp.client;
