import { HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClient, users } from '@prisma/client';
import { AuthRequest } from './dto/auth-request.dto';
import { AuthResponse } from './dto/auth-response.dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';


@Injectable()
export class AuthService {
    private prisma = new PrismaClient();

    constructor(private readonly jwtService: JwtService,
        private readonly configService: ConfigService
    ) {}

    async signIn(request: AuthRequest): Promise<AuthResponse> {
        let user = await this.prisma.users.findFirst({
            where: { username: request.username },
        });

        if (!user) {
            return Promise.reject({
                status: HttpStatus.NOT_FOUND,
                message: "User not found"
            });
        }

        if (user.password !== request.password) {
            return Promise.reject({
                status: HttpStatus.UNAUTHORIZED,
                message: "Password is not correct"
            });
        }

        let token = this.jwtService.signAsync(
            {data: "data"},
            {secret: this.configService.get("SECRET_KEY"), expiresIn: "1h"}
        )

        return Promise.resolve(new AuthResponse(await token));
    }
}


