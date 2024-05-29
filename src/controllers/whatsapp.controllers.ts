import { Request, Response } from "express";
import { whatsapp } from "../app";
import { delay, getRandomDelay } from "../helpers/whatsapp";

class WhatsappController {
  async sendMessage(req: Request, res: Response) {
    const { message } = req.body;

    const numbers = ["5218125210247@c.us", "5218113730969@c.us"];

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

    try {
      await this.sendMessagesWithDelay(numbers, message);

      res.status(200).send("Mensajes enviados exitosamente");
    } catch (error) {
      res.status(500).send("Error al enviar mensajes");
    }

    res.json({ test: "test" });
  }

  async sendMessagesWithDelay(numbers: string[], message: string) {
    for (let number of numbers) {
      try {
        await whatsapp.sendMessage(number, message);
        console.log("Mensaje enviado a ", number);

        const randomDelay = getRandomDelay(30000, 60000);

        await delay(randomDelay);
      } catch (error) {
        console.log(error);
      }
    }
  }
}

export const whatsappController = new WhatsappController();
