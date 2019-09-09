import {Injectable} from '@nestjs/common';
import {UsuarioEntity} from './usuario.entity';
import {Repository, UpdateResult} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';


@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(UsuarioEntity) private readonly _usuarioRepository: Repository<UsuarioEntity>,
    ) {
    }

    crear(usuario: UsuarioEntity): Promise<UsuarioEntity> {
        return this._usuarioRepository.save(usuario);
    }

    editar(id: number, usuario: UsuarioEntity): Promise<UsuarioEntity | UpdateResult> {
        return this._usuarioRepository.update(id, usuario);
    }

    eliminar(id: number) {
        return this._usuarioRepository.delete(id);
    }

    buscarPorId(id: number) {
        return this._usuarioRepository.findOne(id);
    }

    buscarPorParametros(criterioBusqueda): Promise<UsuarioEntity[]> {
        return this._usuarioRepository.find(criterioBusqueda);
    }

    buscarTodos(): Promise<UsuarioEntity[]> {
        return this._usuarioRepository.find();
    }
}
