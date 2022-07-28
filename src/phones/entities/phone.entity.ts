import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Запись телефонной книги' })
export class Phone {
  @Field(() => ID, { description: 'Уникальный идентификатор записи' })
  id: string;

  @Field({ nullable: false, description: 'Номер телефона' })
  number: string;

  @Field({ nullable: false, description: 'Имя владельца телефона ' })
  name: string;

  @Field({ nullable: true, description: 'Адресс владельца телефона ' })
  address?: string;
}
