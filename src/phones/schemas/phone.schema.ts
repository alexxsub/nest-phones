import { Field, InputType, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

import { Schema as MongooseSchema } from 'mongoose';

MongooseSchema.Types.String.set('trim', true);

@Schema()
@ObjectType()

export class Phone {
    @Field(() => ID, { description: 'Уникальный идентификатор записи' })
    readonly id: String;

    @Field({ nullable: false, description: 'Номер телефона' })
    @Prop({ unique: true })
    @IsNotEmpty()
    @MaxLength(11)
    number: string;

    @Field({ nullable: false, defaultValue: 'unknown', description: 'Имя владельца телефона ' })
    @Prop()
    @IsString()
    name: string;

    @Field({ nullable: true, description: 'Адресс владельца телефона ' })
    @Prop({
        set: (content: string) => {
            return content.trim();
        },
    })
    address: string;
}





export const PhoneSchema = SchemaFactory.createForClass(Phone);