/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */
import { Controller, Get, Query } from '@nestjs/common';
import { EnergisaService } from 'src/Services/EnergisaService';


@Controller("energisa")
export class EnergisaController {
    constructor(
        private readonly energisaService: EnergisaService,
    ) {}

    @Get()
    async receberCodigoPix(
        @Query("website") website: string,
        @Query("matricula") matricula: string,
    ): Promise<{}> {
        return await this.energisaService.teste()
    }
}
