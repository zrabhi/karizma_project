import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto/auth-dtos";



@Injectable()

export default class AuthService{

    constructor(private readonly prisma: PrismaService)
    {

    }


async checkUserExistence(name: string) : Promise<any>
{
    const User = await this.prisma.user.findUnique({
        where:{
                name: name
        }});
}

async SignUp(data: AuthDto) {
    try
    {
        const existence = await this.checkUserExistence(data.name);
        if (!existence)
            return{
                success: false,
                message:"this User already exists"
            }
        else
        {
            // hash password wit bcyrpt

        }
    }catch(err)
    {
        return {
            success: false,
            message:"error occured"
        }
    }
}
 // implement signup method

    // implement json web tokeen fucntion


    /// implement  signin method

}