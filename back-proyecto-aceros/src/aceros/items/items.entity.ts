import {Column, Entity, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";

@Entity('items')

export class ItemsEntity {

    @PrimaryGeneratedColumn({
        name: 'id',
    })
    id: number;

    @Column({
        name: 'UNIDAD_DE_NEGOCIO',
        type: "varchar"
    })
    unidadNegocio: string;

    @Column({
        name: 'MARCA',
        type: "varchar"
    })
    marca: string;

    @Column({
        name: 'SKU',
        type: "int"
    })
    sku: number;

    @Column({
        name: 'VARIACION',
        type: "int"
    })
    variacion: number;

    @Column({
        name: 'VENTA_PROMEDIO',
        type: "int"
    })
    ventaPromedio: number;

    @Column({
        name: 'PONDERADO_ROTACION',
        type: "int"
    })
    ponderadoRotacion: number;

    @Column({
        name: 'PROYECCION_ABS',
        type: "int"
    })
    proyeccionAbs: number;

    @Column({
        name: 'MARGEN',
        type: "int"
    })
    margen: number;

    @Column({
        name: 'PORCENTAJE',
        type: "int"
    })
    porcentaje: number;

    @Column({
        name: 'PORCENTAJE_ACUMULADO',
        type: "int"
    })
    porcentajeAcumulado: number;

    @Column({
        name: 'CLASIF_MARGEN',
        type: "int"
    })
    clasifMargen: number;


    @Column({
        name: 'CLASIF_CANT_VTS',
        type: "int"
    })
    clasifCantVts: number;

    @Column({
        name: 'CLASIF_MARG_VTS',
        type: "int"
    })
    clasifMargVts: number;
}
