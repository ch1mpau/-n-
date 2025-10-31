import { Controller, Post, Body } from "@nestjs/common";
import { users } from "src/constant";
interface LoginDto {
    username: string;
    password: string;
}
@Controller('auth')
export class AuthController {
    @Post('login')
    login(@Body() data: LoginDto): any {
        // console.log('Login attempt:', data);
        // return 'This is the login endpoint';
        
    }
}