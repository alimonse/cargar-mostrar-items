import { Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {ItemsEntity} from "./items.entity";
import {Repository, getRepository} from "typeorm";


@Injectable()
export class ItemsService {

    constructor(
        @InjectRepository(ItemsEntity) private readonly _itemsRespository: Repository<ItemsEntity>
    ) {}

    obtenerTodos() {
        return this._itemsRespository.find({
            order: {
                id: 'DESC'
            }
        })
    }

    async obtenerItems(campo) {
        const arregloItems = (await getRepository(ItemsEntity)
            .createQueryBuilder("items")
            .select( `items.${campo}`)
            .distinctOn([`items.${campo}`])
            .getMany() as any[]).map(respCampo => {
            return {
                    name: respCampo[campo],
                    code: respCampo[campo]
                }
        })
        return arregloItems;
    }

    consultaFiltros(filtros){

        let consulta = {};

        filtros.forEach(filtro => {
            console.log(filtro.campo);
            consulta[filtro.campo] = filtro.valor;
        })
        console.log(consulta,'consulta');

        return this._itemsRespository.find({
            where:{
               ...consulta
            }
        })
    }

}
