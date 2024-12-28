import { IsNumber, IsString,isNumber } from "class-validator";

export class CreateProductDto {

  @IsString()
  name: string;

  @IsString()
  description: string;
  
  @IsNumber()
  price: number;

  @IsString()
  category: string;



}