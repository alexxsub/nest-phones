import { NotFoundException } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PhonesService } from './phones.service';
//import { Phone } from './entities/phone.entity';
import { Phone } from './schemas/phone.schema'
import { CreatePhoneInput } from './dto/create-phone.input';
import { UpdatePhoneInput } from './dto/update-phone.input';

@Resolver(() => Phone)
export class PhonesResolver {
  constructor(private readonly phonesService: PhonesService) { }

  @Mutation(() => Phone)
  createPhone(@Args('createPhoneInput') createPhoneInput: CreatePhoneInput) {
    return this.phonesService.create(createPhoneInput);
  }

  @Query(() => [Phone], { name: 'phones' })
  findAll() {
    return this.phonesService.findAll();
  }

  @Query(() => Phone, { name: 'phone' })
  findOne(@Args('id') id: string) {
    const res = this.phonesService.findOne(id);
    if (!res) {
      throw new NotFoundException(`Record ${id} not found`);
    }
    return res;
  }

  @Mutation(() => Phone)
  updatePhone(
    @Args('updatePhoneInput')
    updatePhoneInput: UpdatePhoneInput,
  ) {
    return this.phonesService.update(updatePhoneInput);
  }

  @Mutation(() => Phone)
  removePhone(@Args('id') id: string) {
    const res = this.phonesService.remove(id);
    if (!res) {
      throw new NotFoundException(id);
    }
    return res;
  }
}
