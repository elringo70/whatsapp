import { Client, LocalAuth } from "whatsapp-web.js";
import qrcode from "qrcode-terminal";

export class Whatsapp {
  public client: Client;

  constructor() {
    this.client = new Client({
      webVersionCache: {
        type: "remote",
        remotePath:
          "https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2412.54.html",
      },
      authStrategy: new LocalAuth(),
    });

    this.client.on("ready", () => {
      console.log("Client is ready!");
    });

    this.client.on("qr", (qr) => {
      qrcode.generate(qr, { small: true });
    });

    this.client.initialize();
  }
}

const whatsapp = new Whatsapp();
export default whatsapp.client;
