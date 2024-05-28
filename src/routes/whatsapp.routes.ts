import { Router } from "express";
import { whatsappController } from "../controllers/whatsapp.controllers";

class WhatsappRoutes {
  public router: Router;

  constructor() {
    this.router = Router();
    this.config();
  }

  private config() {
    this.router.post("/send-message", whatsappController.sendMessage);
  }
}

const whatsappRoutes = new WhatsappRoutes();
export default whatsappRoutes.router;
