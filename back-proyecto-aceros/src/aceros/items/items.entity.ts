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
        type: "decimal"
    })
    sku: number;

    @Column({
        name: 'VARIACION',
        type: "decimal"
    })
    variacion: number;

    @Column({
        name: 'VENTA_PROMEDIO',
        type: "decimal"
    })
    ventaPromedio: number;

    @Column({
        name: 'PONDERADO_ROTACION',
        type: "varchar"
    })
    ponderadoRotacion: string;

    @Column({
        name: 'PROYECCION_ABS',
        type: "decimal"
    })
    proyeccionAbs: number;

    @Column({
        name: 'MARGEN',
        type: "decimal"
    })
    margen: number;

    @Column({
        name: 'PORCENTAJE',
        type: "decimal"
    })
    porcentaje: number;

    @Column({
        name: 'PORCENTAJE_ACUMULADO',
        type: "decimal"
    })
    porcentajeAcumulado: number;

    @Column({
        name: 'CLASIF_MARGEN',
        type: "varchar"
    })
    clasifMargen: string;

    @Column({
        name: 'CANTIDAD_VENTAS',
        type: "decimal"
    })
    cantidadVentas: number;

    @Column({
        name: 'PORCENTAJE_VENTAS',
        type: "decimal"
    })
    porcentajeVentas: number;

    @Column({
        name: 'PORCENTAJE_ACUMULADO_VENTAS',
        type: "decimal"
    })
    porcentajeAcumuladoVentas: number;


    @Column({
        name: 'CLASIF_CANT_VENTAS',
        type: "varchar"
    })
    clasifCantVts: string;

    @Column({
        name: 'CLASIF_ROT_MARG_VENTAS',
        type: "varchar"
    })
    clasifMargVts: string;
}
