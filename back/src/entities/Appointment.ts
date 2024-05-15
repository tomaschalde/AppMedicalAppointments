import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { User } from "./User";

@Entity({
    name: "appointments" 
})

export class Appointment {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    date: string

    @Column()
    time: string

    @Column()
    description: string

    @Column({default: "active"})
    status: "active" | "cancelled"

    //Relacion muchos a uno
    @ManyToOne ( () => User, (user) => user.appointments)
    user: User 
}