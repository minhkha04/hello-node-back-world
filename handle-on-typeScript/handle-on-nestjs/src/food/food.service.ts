import { Injectable } from '@nestjs/common';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class FoodService {

  private prisma = new PrismaClient();


  create(createFoodDto: CreateFoodDto) {
    return 'This action adds a new food';
  }

  async findAll(): Promise<any> {
    return await this.prisma.foods.findMany({
      include: { food_types: true },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} food`;
  }

  update(id: number, updateFoodDto: UpdateFoodDto) {
    return `This action updates a #${id} food`;
  }

  remove(id: number) {
    return `This action removes a #${id} food`;
  }
}
