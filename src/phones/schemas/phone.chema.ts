import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type PhoneDocument = Phone & Document;
@Schema()
export class Phone {
  @Prop({ unique: true })
  number: string;
  @Prop()
  name: string;
  @Prop({
    set: (content: string) => {
      return content.trim();
    },
  })
  address: string;
}
const PhoneSchema = SchemaFactory.createForClass(Phone);

PhoneSchema.index({ name: 'text', number: 'text', address: 'text' });

export { PhoneSchema };
