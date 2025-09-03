import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthRequest } from './dto/auth-request.dto';
import { AuthResponse } from './dto/auth-response.dto';
import { JwtService } from '@nestjs/jwt';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService,
    
  ) { }

  @Post('sign-in')
  signIn(@Body() request: AuthRequest): Promise<AuthResponse> {
    return this.authService.signIn(request);
  }

  // @Post('sign-up')
  // signIn() {
  //   return this.authService.signUp();
  // }
}
