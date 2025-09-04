import { IsNotEmpty, IsOptional } from "class-validator";

export class SignInDto {
    @IsOptional()
    email: string;
    @IsOptional()
    password: string;
    @IsOptional()
    accessToken: string;
}