import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/users.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  /**
   * 모듈에서 import한 - 주입한 - UserSchema 모델 의존
   * > 참고 : https://docs.nestjs.com/techniques/mongodb#model-injection
   */
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  /* 회원 가입 및 생성 */
  async create(createUserDto: CreateUserDto) {
    /* email,name,country 유효성 검사 */
    const { email, name, password, age, country } = createUserDto;
    const isUserExist = await this.userModel.exists({ email, name, country });
    if (isUserExist) {
      throw new UnauthorizedException('사용자에 대한 계정이 이미 존재합니다.'); // 404 ERROR
    }

    /* password 암호화 */
    const hashedPassword = await bcrypt.hash(password, 5);

    /* email,name,password,age,country DB 저장 */
    const user = await this.userModel.create({
      email,
      name,
      password: hashedPassword,
      age,
      country,
    });

    return user.readOnlyData; // 가상멤버 필드를 반환함으로서 password를 숨길 수 있음
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
