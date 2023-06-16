import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { Company } from './entities/company.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>,
  ) {}

  create(createCompanyDto: CreateCompanyDto) {
    const company = new Company();
    company.name = createCompanyDto.name;
    company.address = createCompanyDto.address;
    company.telephone = createCompanyDto.telephone;
    return this.companyRepository.save(company);
  }

  findAll() {
    return this.companyRepository.find();
  }

  findOne(id: number) {
    return this.companyRepository.findOneBy({ id: id });
  }

  update(id: number, updateCompanyDto: UpdateCompanyDto) {
    return this.companyRepository.save({
      id: id,
      name: updateCompanyDto.name,
      address: updateCompanyDto.address,
      telephone: updateCompanyDto.telephone,
    });
  }

  remove(id: number) {
    return this.companyRepository.delete(id);
  }
}
