import {Module} from '@nestjs/common';
import {MascotaController} from './mascota.controller';
import {MascotaService} from './mascota.service';
import {MascotaEntity} from './mascota.entity';
import {TypeOrmModule} from '@nestjs/typeorm';


@Module({
    imports: [
        TypeOrmModule.forFeature(
            [
                MascotaEntity
            ],
            'default'
        ),
    ],
    controllers: [MascotaController],
    providers: [MascotaService],
    exports: [MascotaService],

})
export class MascotaModule {
}
