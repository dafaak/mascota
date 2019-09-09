import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('usuario')
export class UsuarioEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    ciudad:string;
    @Column()
    pais:string;
    @Column()
    direccion:string;
    @Column()
    telefono:string;
    @Column()
    identificacion:string;
}
