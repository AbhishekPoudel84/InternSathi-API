import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Internship {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  department: string;

  @Column()
  position: string;

  @Column()
  qualifications: string;

  @Column()
  additional_information: string;

  @Column()
  deadline: string;
}
