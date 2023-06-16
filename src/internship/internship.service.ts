import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateInternshipDto } from './dto/create-internship.dto';
import { UpdateInternshipDto } from './dto/update-internship.dto';
import { Internship } from './entities/internship.entity';
import { ILike } from 'typeorm';
@Injectable()
export class InternshipService {
  constructor(
    @InjectRepository(Internship)
    private readonly internshipRepository: Repository<Internship>,
  ) {}

  create(createInternshipDto: CreateInternshipDto) {
    const internship = new Internship();
    internship.department = createInternshipDto.department;
    internship.position = createInternshipDto.position;
    internship.qualifications = createInternshipDto.qualifications;
    internship.additional_information =
      createInternshipDto.additional_information;
    internship.deadline = createInternshipDto.deadline;
    return this.internshipRepository.save(internship);
  }

  findAll() {
    return this.internshipRepository.find();
  }

  findOne(id: number) {
    return this.internshipRepository.findOneBy({ id: id });
  }

  filter(department, position) {
    const conditions = [];
    if (department) {
      conditions.push({ department: ILike(`%${department || ''}%`) });
    }
    if (position) {
      conditions.push({ position: ILike(`%${position || ''}%`) });
    }
    return this.internshipRepository.find({
      where: conditions,
    });
  }

  update(id: number, updateInternshipDto: UpdateInternshipDto) {
    return this.internshipRepository.save({
      id: id,
      department: updateInternshipDto.department,
      position: updateInternshipDto.position,
      qualifications: updateInternshipDto.qualifications,
      additional_information: updateInternshipDto.additional_information,
      deadline: updateInternshipDto.deadline,
    });
  }

  remove(id: number) {
    return this.internshipRepository.delete(id);
  }
}
