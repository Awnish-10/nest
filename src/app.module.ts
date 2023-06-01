import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './user/authentication/auth.controller';
import { JwtStrategy } from './user/authentication/jwt.strategy';
import { GoogleStrategy } from './user/authentication/google.strategy';
import { User } from './user/user.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { JwtStrategy } from './user/jwt.strategy';
// import { AuthController } from './auth.controller';
// import { GoogleStrategy } from './user/google.strategy';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'your_password',
      database: 'nest_user_auth',
      entities: [User],
      synchronize: true, // Set to false in production
    }),
    UserModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AuthController,AppController],
  providers: [JwtStrategy, GoogleStrategy, AppService],
})
export class AppModule {}
