import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {MascotaModule} from './mascota/mascota.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import {MascotaEntity} from './mascota/mascota.entity';

@Module({
    imports: [MascotaModule, TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 32771,
        name: 'default',
        username: 'israel',
        password: '12345678',
        database: 'uni',
        entities: [MascotaEntity],
        synchronize: true,
        dropSchema: true
    })
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
