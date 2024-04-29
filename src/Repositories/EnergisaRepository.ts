/* eslint-disable @typescript-eslint/ban-types */
import { Injectable } from "@nestjs/common";


@Injectable()
export class EnergisaRepository {
    constructor() {}

    async teste(): Promise<{}> {
        return "ola"
    }
}
