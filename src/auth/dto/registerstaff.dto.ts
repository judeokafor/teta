import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class RegisterStaffDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  phoneNumber: string;

  staffId?: string;
}
