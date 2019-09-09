import {MascotaEntity} from './mascota.entity';
import {Injectable} from '@nestjs/common';
import {Repository, UpdateResult} from 'typeorm';


@Injectable()
export class MascotaService {
    constructor(
        @InjectRepository(MascotaEntity) private readonly _mascotaRepository: Repository<MascotaEntity>,
    ) {
    }

    crear(mascota: MascotaEntity): Promise<MascotaEntity> {
        return this._mascotaRepository.save(mascota);
    }

    editar(id: number, mascota: MascotaEntity): Promise<MascotaEntity | UpdateResult> {
        return this._mascotaRepository.update(id, mascota);
    }

    eliminar(id: number) {
        return this._mascotaRepository.delete(id);
    }

    buscarPorId(id: number) {
        return this._mascotaRepository.findOne(id);
    }

    buscarPorParametros(criterioBusqueda): Promise<MascotaEntity[]> {
        return this._mascotaRepository.find(criterioBusqueda);
    }

    buscarTodos(): Promise<MascotaEntity[]> {
        return this._mascotaRepository.find();
    }
}
