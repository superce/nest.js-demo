import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from './modules/article/article.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserModule } from './user/user/user.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    ArticleModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3305,
      username: 'root',
      password: '123456',
      database: 'sign_up',
      entities: ["dist/modules/**/*.entity{.ts,.js}"],
      synchronize: true,
    }),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
