import {Body, Controller, Delete, Get, InternalServerErrorException, Param, Post, Put, Query} from '@nestjs/common';
import {UsuarioService} from './usuario.service';


@Controller('usuario')
export class UsuarioController {
    constructor(private readonly _usuarioService: UsuarioService) {
    }
    @Post()
    async crear(@Body()datosAGuardar) {
        try {
            const respuestaCrear = await this._usuarioService.crear(datosAGuardar);
            return respuestaCrear;
        } catch (e) {
            throw new InternalServerErrorException(e);
        }

    }

    @Get(':id')
    async buscarPorId(@Param('id')id) {
        try {
            const resultadiBusqueda = await this._usuarioService.buscarPorId(id);
            return resultadiBusqueda;
        } catch (e) {
            throw new InternalServerErrorException(e);
        }
    }

    @Delete(':id')
    async eliminar(@Param('id')id) {
        try {
            const respuestaEliminar = await this._usuarioService.eliminar(id);
            return respuestaEliminar;
        } catch (e) {
            throw new InternalServerErrorException(e);
        }
    }

    @Get('find/query')
    async buscarPorParametros(@Query()criterioBusqueda) {
        try {
            const resultadoBusquedaParametro = await this._usuarioService.buscarPorParametros(criterioBusqueda);
            return resultadoBusquedaParametro;
        } catch (e) {
            throw new InternalServerErrorException(e);
        }
    }

    @Get('listar')
    async buscarTodos() {
        try {
            const listaCiudades = await this._usuarioService.buscarTodos();
            return listaCiudades;
        } catch (e) {
            throw new InternalServerErrorException(e);
        }
    }

    @Put(':id')
    async editar(@Body()datosAActualizar, @Param('id') id) {
        try {
            const respuestaEditar = await this._usuarioService.editar(id, datosAActualizar);
            return respuestaEditar;
        } catch (e) {
            throw new InternalServerErrorException(e);
        }
    }
}
