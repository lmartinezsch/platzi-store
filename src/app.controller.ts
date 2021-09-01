import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return "hola mundo!!!!";
  }

  @Get("/prueba")
  getPrueba(): string {
    return "es una prueba"
  }
}
