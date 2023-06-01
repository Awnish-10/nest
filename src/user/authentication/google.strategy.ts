import { Strategy } from 'passport-google-oauth20';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { User } from '../user.entity';
// import { User } from './user.entity';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(private readonly authenticationService: AuthenticationService) {
    super({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:3000/auth/google/callback',
      scope: ['email', 'profile'],
    });
  }
  
  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
  ): Promise<User> {
    // You can implement the logic to create or retrieve the user based on the profile data
    // For simplicity, let's assume we retrieve the user based on the email
    const user = await this.findUserByEmail(profile.emails[0].value);

    if (user) {
      return user;
    }

    throw new UnauthorizedException();
  }
  async findUserByEmail(email: string): Promise<User | undefined> {
    return this.userRepository.findOne({ email });
  }
}
