import {Injectable} from '@nestjs/common';
import {Repository, UpdateResult} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import {VeterinariaEntity} from './veterinaria.entity';


@Injectable()
export class VeterinariaService {
    constructor(
        @InjectRepository(VeterinariaEntity) private readonly _veterinariaRepository: Repository<VeterinariaEntity>,
    ) {
    }

    crear(veterinaria: VeterinariaEntity): Promise<VeterinariaEntity> {
        return this._veterinariaRepository.save(veterinaria);
    }

    editar(id: number, veterinaria: VeterinariaEntity): Promise<VeterinariaEntity | UpdateResult> {
        return this._veterinariaRepository.update(id, veterinaria);
    }

    eliminar(id: number) {
        return this._veterinariaRepository.delete(id);
    }

    buscarPorId(id: number) {
        return this._veterinariaRepository.findOne(id);
    }

    buscarPorParametros(criterioBusqueda): Promise<VeterinariaEntity[]> {
        return this._veterinariaRepository.find(criterioBusqueda);
    }

    buscarTodos(): Promise<VeterinariaEntity[]> {
        return this._veterinariaRepository.find();
    }
}
