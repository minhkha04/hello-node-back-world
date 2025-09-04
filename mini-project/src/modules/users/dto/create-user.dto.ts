import { IsEmail, IsEmpty, IsNotEmpty } from "@nestjs/class-validator";

export class CreateUserDto {

    @IsNotEmpty()
    fullName: string;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;
}
