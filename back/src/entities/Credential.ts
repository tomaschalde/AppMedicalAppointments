import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: "credentials"
})

export class Credential{
    @PrimaryGeneratedColumn()
    id: number

    @Column({unique: true})
    username: string

    @Column()
    password: string
}