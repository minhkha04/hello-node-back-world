import { HttpException } from '@nestjs/common';
import bcrypt from 'bcrypt';

export const hashPasswordHepler = async (password: string): Promise<string> => {
    try {
        return await bcrypt.hash(password, 10);
    } catch (error) {
        console.log(error);
        throw new HttpException('Error hashing password', 500);
    }
}

export const comparePasswordHelper = async (password: string, hashPassword: string): Promise<boolean> => {
    try {
        console.log(password, hashPassword);
        return await bcrypt.compare(password, hashPassword);
    } catch (error) {
        console.log(error);
        throw new HttpException('Error comparing password', 500);
    }
}