import {TypeOrmModule} from '@nestjs/typeorm';
import {VeterinariaService} from './veterinaria.service';
import {VeterinariaController} from './veterinaria.controller';
import {VeterinariaEntity} from './veterinaria.entity';
import {Module} from '@nestjs/common';

@Module({
    controllers: [VeterinariaController],
    providers: [VeterinariaService],
    exports: [VeterinariaService],
    imports: [
        TypeOrmModule.forFeature(
            [
                VeterinariaEntity
            ],
            'default'
        ),
    ],
})
export class VeterinariaModule {
}
