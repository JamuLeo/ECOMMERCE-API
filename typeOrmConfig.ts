import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Product } from 'src/product/entities/product.entity';

export const typeOrmConfig : TypeOrmModuleOptions ={

    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'store',
    entities: [Product],
    synchronize: true,



}