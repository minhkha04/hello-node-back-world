import { Controller, Get, Post, Body, Patch, Param, Delete, Query, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign-in.dto';
import { Provider } from './enums/provider.enum';
import { sign } from 'crypto';
import { SignUpDto } from './dto/sgin-up.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @HttpCode(HttpStatus.OK)
  @Post('sign-in')
  signIn(@Body() request: SignInDto, @Query('provider') provider: Provider) {
    return this.authService.signIn(request, provider);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('sign-up')
  signUp(@Body() request: SignUpDto) {
    return this.authService.signUp(request);
  }

}