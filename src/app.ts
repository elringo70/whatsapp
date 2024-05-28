import express, { Application } from "express";
import morgan from "morgan";

import Whatsapp from "./utils/whatsapp";

import { whatsappRoutes } from "./routes";

export class App {
  private app: Application;
  private port: number | string | undefined;

  constructor(port?: number | string | undefined) {
    this.app = express();
    this.port = port;

    this.settings();
    this.middlewares();
    this.routes();
  }

  private settings() {
    this.app.set("port", this.port || process.env.PORT || 3000);
  }

  private middlewares() {
    this.app.use(morgan("dev"));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private routes() {
    this.app.use("/api/whatsapp", whatsappRoutes);
  }

  public async listen() {
    this.app.listen(this.app.get("port"));
    console.log("Server on port", this.app.get("port"));
  }
}

export const whatsapp = Whatsapp;
