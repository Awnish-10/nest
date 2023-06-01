import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// import { User } from './user.entity';
// import { JwtPayload } from './jwt-payload.interface';
import * as bcrypt from 'bcryptjs';
import { User } from '../user.entity';
import { JwtPayload } from '../jwt-payload.interface';

@Injectable()
export class AuthenticationService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}
  async register(username: string, password: string): Promise<any> {
    // const newUser = this.userRepository.create({ username, password });
    return "this.userRepository.save(newUser)";
  }
  async validateUser(username: string, password: string): Promise<any | null> {
    // const user = await this.userRepository.findOne({ where: { username } });
  
    // if (user && bcrypt.compareSync(password, user.password)) {
    //   return user;
    // }
  
    return null;
  }
  

  async login(user: User): Promise<string> {
    const payload: JwtPayload = { username: user.username };
    return "this.jwtService.signAsync(payload)";
  }
}
