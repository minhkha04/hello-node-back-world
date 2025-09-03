import { Controller, Get, Param, Query, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get("/demo/:id")
  getHello(@Param('id') id: string,
    @Query('search') search: string): string {

    return 'Hello World! ID: ' + id + ' Search: ' + search;

    // return this.appService.getHello();
  }

  @Get("/sum")
  sum(@Query('num1') num1: number, @Query('num2') num2: number): number {
    return num1 * 1 + num2 * 1;
  }

}
