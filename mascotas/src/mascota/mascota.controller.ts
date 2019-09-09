import {Body, Controller, Delete, Get, InternalServerErrorException, Param, Post, Put, Query} from '@nestjs/common';
import {MascotaService} from './mascota.service';


@Controller('mascota')
export class MascotaController {
    constructor(private readonly _mascotaService: MascotaService) {
    }
    @Post()
    async crear(@Body()datosAGuardar) {
        try {
            const respuestaCrear = await this._mascotaService.crear(datosAGuardar);
            return respuestaCrear;
        } catch (e) {
            throw new InternalServerErrorException(e);
        }

    }

    @Get(':id')
    async buscarPorId(@Param('id')id) {
        try {
            const resultadiBusqueda = await this._mascotaService.buscarPorId(id);
            return resultadiBusqueda;
        } catch (e) {
            throw new InternalServerErrorException(e);
        }
    }

    @Delete(':id')
    async eliminar(@Param('id')id) {
        try {
            const respuestaEliminar = await this._mascotaService.eliminar(id);
            return respuestaEliminar;
        } catch (e) {
            throw new InternalServerErrorException(e);
        }
    }

    @Get('find/query')
    async buscarPorParametros(@Query()criterioBusqueda) {
        try {
            const resultadoBusquedaParametro = await this._mascotaService.buscarPorParametros(criterioBusqueda);
            return resultadoBusquedaParametro;
        } catch (e) {
            throw new InternalServerErrorException(e);
        }
    }

    @Get('listar')
    async buscarTodos() {
        try {
            const listaCiudades = await this._mascotaService.buscarTodos();
            return listaCiudades;
        } catch (e) {
            throw new InternalServerErrorException(e);
        }
    }

    @Put(':id')
    async editar(@Body()datosAActualizar, @Param('id') id) {
        try {
            const respuestaEditar = await this._mascotaService.editar(id, datosAActualizar);
            return respuestaEditar;
        } catch (e) {
            throw new InternalServerErrorException(e);
        }
    }
}
