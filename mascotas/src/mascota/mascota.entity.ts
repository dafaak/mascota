import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

/*export enum estado {
    fallecida,
    enferma,
    sana,
    dada_de_alta
}
export enum tipoMascota{
    felino,
    canino,
    pez,
    ave
}*/
@Entity('mascota')
export class MascotaEntity {

    @PrimaryGeneratedColumn()
    id: number;
    @Column(/*{
        type:"enum",
        enum:tipoMascota
    }*/)
    tipo: string;
    @Column(/*{
        type: 'enum',
        enum: estado,
        default:estado.sana
    }*/)
    estado: string;
    @Column()
    descripcion: string;
    @Column()
    habilitado: boolean;
    @Column()
    edad: string;
    @Column()
    raza: string;
}



