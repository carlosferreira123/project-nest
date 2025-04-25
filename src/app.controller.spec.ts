import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";



@Controller('/api')
export class AppController {
  constructor(private readonly appService: AppService) {} // ✅ Correto: "constructor"

  @Get('/hello')
  getHello(): string {
    return 'aaaaaaa'; // Ou use this.appService.getHello() se o serviço tiver um método
  }
}