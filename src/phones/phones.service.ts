/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotFoundException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreatePhoneInput } from './dto/create-phone.input';

import { UpdatePhoneInput } from './dto/update-phone.input';

import { Model } from 'mongoose';

import { Phone, PhoneDocument } from './schemas/phone.chema';

@Injectable()
export class PhonesService {
  constructor(
    @InjectModel(Phone.name) private phoneModel: Model<PhoneDocument>,
  ) {}

  async create(createPhoneInput: CreatePhoneInput): Promise<Phone> {
    const createdPhone = new this.phoneModel(createPhoneInput);

    return await createdPhone.save();
  }

  async findAll(): Promise<Phone[]> {
    return await this.phoneModel.find().exec();
  }

  async findOne(id: string): Promise<Phone> {
    return await this.phoneModel.findById({ _id: id });
  }
  async update(updatePhoneInput: UpdatePhoneInput): Promise<Phone> {
    const id = updatePhoneInput.id;
    delete updatePhoneInput.id;
    const updatedPhone = await this.phoneModel.findByIdAndUpdate(
      { _id: id },
      updatePhoneInput,
      { new: true },
    );

    return updatedPhone;
  }
  async remove(id: string): Promise<Phone> {
    const deletedPhone = await this.phoneModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedPhone;
  }
}
