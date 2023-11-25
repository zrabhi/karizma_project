import { Body, Controller, Post, Res } from "@nestjs/common";
import AuthService from "./auth.service";
import { AuthDto } from "./dto/auth-dtos";

@Controller('api/auth')
export class AuthController {

    constructor(private readonly authService: AuthService)
    {
    }


    @Post('/signUp')
    async handleSignUp(@Res() res: Response, @Body() data: AuthDto)
    {
        
    }
}