import {Body, Controller, Get, Post, Query, UseInterceptors} from '@nestjs/common';
import {ItemsService} from "./items.service";
import {FileInterceptor} from "@nestjs/platform-express";

@Controller('items')
export class ItemsController {

    constructor(
        private readonly _itemsService: ItemsService
    ) {
    }


    @Get('obtener-todos')
    async findAll() {
        return await this._itemsService.obtenerTodos()
    }

    @Get('obtener-filtros')
     obtenerFiltros(
         @Query('campo') campo: string,
    ){
        return  this._itemsService.obtenerItems(campo)
    }

    @Post('consulta-filtros')
    async obtenerConsultaFiltros(
        @Body() filtros: {arreglo: any[]}
    ) {
        console.log(filtros.arreglo,'filtros');
        return await this._itemsService.consultaFiltros(filtros.arreglo)
    }

}



