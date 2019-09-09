import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {MascotaModule} from './mascota/mascota.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import {MascotaEntity} from './mascota/mascota.entity';
import {UsuarioEntity} from './usuario/usuario.entity';
import {UsuarioModule} from './usuario/usuario.module';
import {VeterinariaModule} from './veterinaria/veterinaria.module';
import {VeterinariaEntity} from './veterinaria/veterinaria.entity';

@Module({
    imports: [MascotaModule, UsuarioModule, VeterinariaModule, TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 32771,
        name: 'default',
        username: 'israel',
        password: '12345678',
        database: 'uni',
        entities: [MascotaEntity, UsuarioEntity, VeterinariaEntity],
        synchronize: true,
        dropSchema: true
    })
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
