import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { Credential } from "./Credential";
import { Appointment } from "./Appointment";

@Entity({
    name: "users",
})

export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column({unique: true})
    email: string

    @Column()
    birthdate: Date

    @Column({unique : true})
    nDni: string


    @OneToOne (() => Credential)

    @JoinColumn()
    credential: Credential

    //Relacion uno a muchos con turnos
    @OneToMany ( () => Appointment, (appointment) => appointment.user)

    appointments: Appointment []
}