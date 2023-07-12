import { IsNotEmpty, IsString } from 'class-validator';

export class CreateReleaseDto {
  @IsString()
  @IsNotEmpty()
  readonly date: string;
}
