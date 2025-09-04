
import { HydratedDocument, Mongoose } from 'mongoose';
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { v4 as uuidv4 } from 'uuid';
export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {

    @Prop({ type: String, default: () => uuidv4() })
    userId: string;

    @Prop({ required: true })
    fullName: string;

    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    password: string;

    @Prop()
    avatar: string;

    @Prop({ default: 'LOCAL' })
    accountType: string;

    @Prop({ default: 'USER' })
    role: string;

    @Prop({ default: true })
    isActive: boolean;

    @Prop()
    codeId: string;

    @Prop()
    codeExpire: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);