import {Module} from '@nestjs/common';
import {MascotaController} from './mascota.controller';
import {MascotaService} from './mascota.service';
import {MascotaEntity} from './mascota.entity';


@Module({
    controllers: [MascotaController],
    providers: [MascotaService],
    exports: [MascotaService],
    imports: [
       /* TypeOrmModule.forFeature(
            [
                MascotaEntity
            ],
            'default'
        ),*/
    ],
})
export class MascotaModule {
}
