import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('veterinaria')
export class VeterinariaEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nombre: string;
    @Column()
    direccion: string;
    @Column()
    telefono: string;
}
