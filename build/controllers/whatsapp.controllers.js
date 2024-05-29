"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.whatsappController = void 0;
const app_1 = require("../app");
const whatsapp_1 = require("../helpers/whatsapp");
class WhatsappController {
    sendMessage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { message } = req.body;
            const numbers = [
                "5218125210247@c.us",
                "5218113730969@c.us",
                "5218113730363@c.us",
            ];
            /* whatsapp.on("ready", () => {
              numbers.forEach((number) => {
                const randomSeconds = Math.floor(
                  Math.random() * (60000 - 10000 + 1) + 10000
                );
        
                console.log(randomSeconds);
        
                setTimeout(() => {
                  whatsapp.sendMessage(number, message);
                }, randomSeconds);
              });
            }); */
            const sendMessage = (number, message) => {
                app_1.whatsapp.sendMessage(number, message);
            };
            app_1.whatsapp.on("ready", () => {
                numbers.forEach((number) => __awaiter(this, void 0, void 0, function* () {
                    const randomSeconds = Math.floor(Math.random() * (60000 - 10000 + 1) + 10000);
                    yield (0, whatsapp_1.asyncFunction)(randomSeconds, sendMessage(number, message));
                }));
            });
            res.json({ test: "test" });
        });
    }
}
exports.whatsappController = new WhatsappController();
