import {UsuarioEntity} from './usuario.entity';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Module} from '@nestjs/common';
import {UsuarioService} from './usuario.service';
import {UsuarioController} from './usuario.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature(
            [
                UsuarioEntity
            ],
            'default'
        ),
    ],
    controllers: [UsuarioController],
    providers: [UsuarioService],
    exports: [UsuarioService],

})
export class UsuarioModule {
}
