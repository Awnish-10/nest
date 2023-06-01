import { Strategy, ExtractJwt } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { JwtPayload } from './jwt-payload.interface';
import { AuthenticationService } from './authentication.service';
import { JwtPayload } from '../jwt-payload.interface';
// import { User } from './user.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authenticationService: AuthenticationService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: JwtPayload) {
    const user = await this.authenticationService.validateUser(payload.username, '');

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
