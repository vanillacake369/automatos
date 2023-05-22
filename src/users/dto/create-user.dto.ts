import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  /* 이메일 DTO 멤버 */
  @IsEmail()
  @IsNotEmpty()
  email: string;

  /* 비밀번호 DTO 멤버 */
  @IsString()
  @IsNotEmpty()
  password: string;

  /* 이름 DTO 멤버 */
  @IsString()
  @IsNotEmpty()
  name: string;

  /* 나이 DTO 멤버 */
  @IsNumber()
  age: number;

  /* 국가 DTO 멤버 */
  @IsString()
  country: string;
}
