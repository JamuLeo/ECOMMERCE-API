import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from 'typeOrmConfig';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './product/product.module';
@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
