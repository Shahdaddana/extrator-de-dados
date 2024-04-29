import { Module } from "@nestjs/common";
import { EnergisaController } from "src/Controllers/EnergisaController";
import { EnergisaRepository } from "src/Repositories/EnergisaRepository";
import { EnergisaService } from "src/Services/EnergisaService";


@Module({
    imports: [],
    controllers: [EnergisaController],
    providers: [
        EnergisaService,
        EnergisaRepository,
    ]
})
export class Energisa {}