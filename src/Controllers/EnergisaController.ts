/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */
import { Controller, Get, Query } from '@nestjs/common';
import { EnergisaService } from 'src/Services/EnergisaService';


@Controller("energisa")
export class EnergisaController {
    constructor(
        private readonly energisaService: EnergisaService,
    ) {}

    @Get("receberCodigoPix")
    async receberCodigoPix(
        @Query("matricula") matricula: string,
    ): Promise<string> {
        return await this.energisaService.receberCodigoPixLimite(matricula)
    }

    @Get("ping")
    async teste(): Promise<string> {
        return "pong"
    }

}
