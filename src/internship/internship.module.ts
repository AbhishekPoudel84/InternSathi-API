import { Module } from '@nestjs/common';
import { InternshipService } from './internship.service';
import { InternshipController } from './internship.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Internship } from './entities/internship.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Internship])],
  controllers: [InternshipController],
  providers: [InternshipService],
})
export class InternshipModule {}
