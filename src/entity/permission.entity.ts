import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Permission {
    @PrimaryGeneratedColumn()
    id: number | undefined;

    @Column()
    name: string;
}