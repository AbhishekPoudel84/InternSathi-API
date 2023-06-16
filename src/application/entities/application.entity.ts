import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Application {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  resume: string;

  @Column()
  status: string;

  @Column()
  date_of_submission: string; //change to dateColumn
}
