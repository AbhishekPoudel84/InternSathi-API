import { Injectable } from '@nestjs/common';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { UpdateCandidateDto } from './dto/update-candidate.dto';
import { Candidate } from './entities/candidate.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CandidateService {
  constructor(
    @InjectRepository(Candidate)
    private readonly candidateRepository: Repository<Candidate>,
  ) {}

  create(createCandidateDto: CreateCandidateDto) {
    const candidate = new Candidate();
    candidate.first_name = createCandidateDto.first_name;
    candidate.last_name = createCandidateDto.last_name;
    candidate.email = createCandidateDto.email;
    candidate.phone = createCandidateDto.phone;
    candidate.username = createCandidateDto.username;
    return this.candidateRepository.save(candidate);
  }

  findAll() {
    return this.candidateRepository.find();
  }

  findOne(id: number) {
    return this.candidateRepository.findOneBy({ id: id });
  }

  update(id: number, updateCandidateDto: UpdateCandidateDto) {
    return this.candidateRepository.save({
      id: id,
      first_name: updateCandidateDto.first_name,
      last_name: updateCandidateDto.last_name,
      email: updateCandidateDto.email,
      phone: updateCandidateDto.phone,
      username: updateCandidateDto.username,
    });
  }

  remove(id: number) {
    return this.candidateRepository.delete(id);
  }
}
