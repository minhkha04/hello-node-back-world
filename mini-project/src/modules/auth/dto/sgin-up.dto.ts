import { IsNotEmpty } from "class-validator";

export class SignUpDto {
    @IsNotEmpty()
    fullName: string;
    @IsNotEmpty()
    email: string;
    @IsNotEmpty()
    password: string;
    @IsNotEmpty()
    code: number;
}
