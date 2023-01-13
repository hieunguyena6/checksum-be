import { IsDefined, IsString, IsEmail, MinLength } from 'class-validator';

export class RegisterUserDto {
  @IsDefined()
  @IsEmail()
  @MinLength(4)
  public userName: string;

  @IsDefined()
  @IsString()
  @MinLength(6)
  public password: string;
}

export class LoginUserDto {
  @IsDefined()
  @IsEmail()
  @MinLength(4)
  public userName: string;

  @IsDefined()
  @IsString()
  @MinLength(6)
  public password: string;
}