import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Document } from 'mongoose';

const options: SchemaOptions = { timestamps: true };

@Schema(options)
export class User extends Document {
  /* 이메일 컬럼 : required & unique */
  @Prop({
    required: true,
    unique: true,
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  /* 이름 컬럼 : required */
  @Prop({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  /* 비밀번호 : required */
  @Prop({
    required: true,
  })
  @IsNotEmpty()
  password: string;

  /* 나이 */
  @IsNumber()
  age: number;

  /* 국가 */
  @IsString()
  country: string;

  /* 가상 내부 멤버 */
  readonly readOnlyData: {
    id: number;
    email: string;
    name: string;
    age: number;
    country: string;
  };
}

export const UserSchema = SchemaFactory.createForClass(User);

// 가상 내부 멤버 필드 선언 :: request 처리 이후 비밀번호 제외한 값을 response에 저장
UserSchema.virtual('readOnlyData').get(function (this: User) {
  return {
    id: this.id,
    email: this.email,
    name: this.name,
    age: this.age,
    country: this.country,
  };
});
