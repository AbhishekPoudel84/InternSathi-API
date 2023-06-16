import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyModule } from './company/company.module';
import { DataSource } from 'typeorm';
import { InternshipModule } from './internship/internship.module';
//import { ApplicationModule } from './application/application.module';
import { CandidateModule } from './candidate/candidate.module';
import { ApplicationModule } from './application/application.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'intersathi',
      synchronize: true,
      autoLoadEntities: true,
      migrationsTableName: 'migrations',
      migrations: [],
    }),
    CompanyModule,
    InternshipModule,
    ApplicationModule,
    CandidateModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
