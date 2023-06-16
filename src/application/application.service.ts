import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateApplicationDto } from './dto/create-application.dto';
import { UpdateApplicationDto } from './dto/update-application.dto';
import { Application } from './entities/application.entity';

@Injectable()
export class ApplicationService {
  constructor(
    @InjectRepository(Application)
    private readonly applicationRepository: Repository<Application>,
  ) {}
  create(createApplicationDto: CreateApplicationDto) {
    const application = new Application();
    application.resume = createApplicationDto.resume;
    application.status = createApplicationDto.status;
    application.date_of_submission = createApplicationDto.date_of_submission;
    return this.applicationRepository.save(application);
  }

  findAll() {
    return this.applicationRepository.find();
  }

  findOne(id: number) {
    return this.applicationRepository.findOneBy({ id: id });
  }

  update(id: number, updateApplicationDto: UpdateApplicationDto) {
    return this.applicationRepository.save({
      id: id,
      resume: updateApplicationDto.resume,
      stauts: updateApplicationDto.status,
      date_of_submission: updateApplicationDto.date_of_submission,
    });
  }

  remove(id: number) {
    return this.applicationRepository.delete(id);
  }
}
