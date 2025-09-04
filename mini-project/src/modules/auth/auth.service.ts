import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { SignInDto } from './dto/sign-in.dto';
import { Provider } from './enums/provider.enum';
import { User } from '../users/schemas/user.schema';
import { comparePasswordHelper, hashPasswordHepler } from 'src/helpers/utils';
import { SignUpDto } from './dto/sgin-up.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  constructor(
    private usersService: UsersService,
    @InjectModel(User.name) private userModel: Model<User>,
    private jwtService: JwtService,
  ) { }

  async signIn(request: SignInDto, provider: Provider) {
    let user: User | null;
    switch (provider) {
      case Provider.LOCAL:
        const { email, password } = request;
        if (!email || !password) {
          throw new UnauthorizedException('Email and password are required');
        }
        user = await this.usersService.findByEmail(email, provider);

        if (!user) {
          throw new UnauthorizedException('Invalid email');
        }

        if (!await comparePasswordHelper(password, user.password)) {
          throw new UnauthorizedException('Invalid password');
        }
        break;
      case Provider.GOOGLE:
      case Provider.FACEBOOK:
        if (!request.accessToken) {
          throw new UnauthorizedException('Access token is required');
        }
        return { message: `Sign in with ${provider} is not implemented yet` };
      default:
        throw new UnauthorizedException('Unsupported provider');
    }
    const payload = { sub: user.userId, email: user.email, role: user.role };
    return {
      token: await this.jwtService.signAsync(payload),
    };
  }

  async signUp(request: SignUpDto) {
    let { fullName, email, password, code } = request;

    let userExist = await this.userModel.findOne({
      email, accountType: 'LOCAL'
    })

    if (userExist) {
      throw new BadRequestException('Email is existed, please use another email!');
    }
    // TODO: create generate and send code to email
    if (Number(code) !== 160604) {
      throw new BadRequestException('Invalid code');
    }

    const hashPassword = await hashPasswordHepler(password);

    const user = await this.userModel.create({
      fullName, email, password: hashPassword
    })
    const payload = { sub: user.userId, email: user.email, role: user.role };
    return {
      token: await this.jwtService.signAsync(payload),
    };
  }
}
