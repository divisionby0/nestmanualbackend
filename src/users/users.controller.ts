import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersService } from "./users.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { User } from "./users.model";

@ApiTags('users')
@Controller('users')
export class UsersController {

  constructor(private userService:UsersService) {
  }

  @ApiOperation({ summary:'Create user endpoint' })
  @ApiResponse({ status:200, type:User })
  @Post()
  createUser(@Body() userDTO:CreateUserDto) {
    return this.userService.createUser(userDTO);
  }

  @ApiOperation({ summary:'Get all users endpoint' })
  @ApiResponse({ status:200, type:[User] })
  @Get()
  getAll() {
    return this.userService.getAllUsers();
  }
}
