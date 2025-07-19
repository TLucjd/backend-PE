import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';

@Injectable()
export class ContactService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateContactDto) {
    return this.prisma.contact.create({ data });
  }

  findAll() {
    return this.prisma.contact.findMany();
  }

  findOne(id: string) {
    return this.prisma.contact.findUnique({ where: { id } });
  }

  update(id: string, data: UpdateContactDto) {
    return this.prisma.contact.update({ where: { id }, data });
  }

  delete(id: string) {
    return this.prisma.contact.delete({ where: { id } });
  }
}
