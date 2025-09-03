import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { FoodModule } from './food/food.module';

@Module({
  imports: [UserModule, FoodModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
