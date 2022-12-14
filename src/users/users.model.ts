import { Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";

interface UserCreationAttrs{
  email:string,
  password: string
}

@Table({
  tableName: 'users'
})
export class User extends Model<User, UserCreationAttrs>{
  @ApiProperty({example:'1', description:'User Id. Autogenerated'})
  @Column({type: DataType.INTEGER, unique:true, autoIncrement:true, primaryKey: true})
  id:number;

  @ApiProperty({example:'user@mail.com', description:'User email'})
  @Column({type: DataType.TEXT, unique:true, allowNull: false})
  email: string;

  @ApiProperty({example:'password', description:'User password'})
  @Column({type: DataType.TEXT, allowNull: false})
  password: string;

  @ApiProperty({example:'true/false', description:'Is User banned or not'})
  @Column({type: DataType.BOOLEAN, defaultValue:false})
  banned: boolean;

  @ApiProperty({example:'Ban reason', description:'Ban reason if user is banned'})
  @Column({type: DataType.TEXT, allowNull: true})
  banReason: string;
}
