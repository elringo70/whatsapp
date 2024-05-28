import { Request, Response } from "express";
import { whatsapp } from "../app";

class WhatsappController {
  async sendMessage(req: Request, res: Response) {
    const { message } = req.body;

    const numbers = [
      "5218125210247@c.us",
      "5218113730969@c.us",
      "5218113730363@c.us",
    ];

    whatsapp.on("ready", () => {
      numbers.forEach((number) => {
        const randomSeconds = Math.floor(
          Math.random() * (60000 - 10000 + 1) + 10000
        );

        console.log(randomSeconds);

        setTimeout(() => {
          whatsapp.sendMessage(number, message);
        }, randomSeconds);
      });
    });

    res.json({ test: "test" });
  }
}

export const whatsappController = new WhatsappController();
