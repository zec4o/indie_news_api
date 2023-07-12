import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDeveloperDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
}
