import { Component, OnInit } from '@angular/core';
import {AcerosRestService} from "../servicios/aceros.rest.service";

@Component({
  selector: 'app-aceros',
  templateUrl: './aceros.component.html',
  styleUrls: ['./aceros.component.css']
})
export class AcerosComponent implements OnInit {

  datosAceros: any;
  selectMarca: any;
  selectSku: any;
  selectUnidadNegocio: any;
  selectVentaPromedio: any;
  selectProyeccion: any;
  selectClasificacion: any;

  marcas: any;
  skus: any;
  unidadNegocios: any;
  ventasPromedio: any;
  proyecciones: any;
  clasificacion: any;


  arregloFiltros: {campo?: string, valor?: string}[] = [];

  consulta = {};






  constructor(
    private readonly _acerosRestService: AcerosRestService
  ) {

  }

  ngOnInit(): void {
    this.obtenerDato()
    this.cargarFiltros();
  }

  cargarFiltros(){
    this._acerosRestService.obtenerFiltros('marca').subscribe(marcas => {
      this.marcas = marcas
    })
    this._acerosRestService.obtenerFiltros('sku').subscribe(skus => {
      this.skus = skus;
    })
    this._acerosRestService.obtenerFiltros('unidadNegocio').subscribe(unidadNegocios => {
      this.unidadNegocios = unidadNegocios;
    })
    this._acerosRestService.obtenerFiltros('ventaPromedio').subscribe(ventaPromedio => {
      this.ventasPromedio = ventaPromedio;
    })
    this._acerosRestService.obtenerFiltros('proyeccionAbs').subscribe(proyecciones => {
      this.proyecciones = proyecciones;
    })
    this._acerosRestService.obtenerFiltros('clasifCantVts').subscribe(clasificacion => {
      this.clasificacion = clasificacion;
    })

  }

  obtenerDato() {
    this._acerosRestService.todos().subscribe(datos => {
      this.datosAceros = datos;
      console.log(datos,'this is datos');
    })
  }

  cabeceras: columnsCabeceras[] = [ {field: 'cantidadVentas',  header: 'CANTIDAD VENTAS'},
    {field: 'clasifCantVts',  header: 'CLASIFICACIÓN'},
    // {field: 'clasifMargVts',  header: 'CLASIFICACIÓN'},
    // {field: 'clasifMargen',  header: 'CLASIFICACIÓN'},
    {field: 'marca',  header: 'MARCA'},
    {field: 'margen',  header: 'MARGEN'},
    {field: 'ponderadoRotacion',  header: 'PONDERADO ROTACIÓN'},
    {field: 'porcentaje',  header: 'PORCENTAJES'},
    // {field: 'porcentajeAcumulado',  header: 'PORCENTAJE ACUMULADO'},
    // {field: 'porcentajeAcumuladoVentas',  header: 'PORCENTAJE ACUMULADO VENTAS'},
    // {field: 'porcentajeVentas',  header: 'PORCENTAJE VENTAS'},
    {field: 'proyeccionAbs',  header: 'PROYECCIÓN ABSOLUTO'},
    {field: 'sku',  header: 'SKU'},
    {field: 'unidadNegocio',  header: 'UNIDAD NEGOCIO'},
    {field: 'variacion',  header: 'VARIACIÓN'},
    {field: 'ventaPromedio',  header: 'VENTA PROMEDIO'},
 ]

  cities = [
    {name: 'TECVAL', code: 'NY'},
    {name: '720480003', code: 'RM'},
    {name: 'A', code: 'LDN'},
    {name: 'Istanbul', code: 'IST'},
    {name: 'Paris', code: 'PRS'}
  ];



  limpiarArregloFiltros(campo:string, arreglo: any[], valorSeleccionado: {name: string}){

    if(valorSeleccionado) {
      const indice = this.arregloFiltros.findIndex(item => item.campo === campo);
      if(indice > -1) {
        this.arregloFiltros[indice] = {
          campo,
          valor: valorSeleccionado.name
        }
      } else {
        this.arregloFiltros.push({
          campo,
          valor: valorSeleccionado.name
        })
      }
      console.log(indice,'este es el indice');
      console.log(this.arregloFiltros,'this is arreglo');

    } else {
      console.log(this.arregloFiltros,'this is arreglo');

      const indice = this.arregloFiltros.findIndex(item => item.campo === campo);
      if(indice > -1) {
        this.arregloFiltros.splice(indice,1)
      }
    }
  }

  seleccionoMarca(event: any) {
    console.log(event.value)
    this.limpiarArregloFiltros('marca',this.arregloFiltros, event.value);
    this._acerosRestService.consultaFiltros(this.arregloFiltros).subscribe(resp => {
      this.datosAceros = resp
      console.log(resp);
    })
  }

  seleccionoSku(event: any) {
    console.log(event.value)
    this.limpiarArregloFiltros('sku',this.arregloFiltros,  event.value);
    this._acerosRestService.consultaFiltros(this.arregloFiltros).subscribe(resp => {
      this.datosAceros = resp
    })
  }

  seleccionoUnidadNegocio(event: any) {
    this.limpiarArregloFiltros('unidadNegocio',this.arregloFiltros,  event.value);
    this._acerosRestService.consultaFiltros(this.arregloFiltros).subscribe(resp => {
      this.datosAceros = resp
    })
  }

  seleccionoVentaPromedio(event: any) {
    this.limpiarArregloFiltros('ventaPromedio',this.arregloFiltros,  event.value);
    this._acerosRestService.consultaFiltros(this.arregloFiltros).subscribe(resp => {
      this.datosAceros = resp
    })
  }

  seleccionoProyeccion(event: any) {
    console.log(event.value)
    this.limpiarArregloFiltros('proyeccionAbs',this.arregloFiltros,  event.value);
    this._acerosRestService.consultaFiltros(this.arregloFiltros).subscribe(resp => {
      this.datosAceros = resp
    })
  }

  seleccionoClasificacion(event: any) {
    this.limpiarArregloFiltros('clasifCantVts',this.arregloFiltros,  event.value);
    this._acerosRestService.consultaFiltros(this.arregloFiltros).subscribe(resp => {
      this.datosAceros = resp
    })
  }


  limpiarFiltros(){
    this.selectMarca = null;
    this.selectSku = null;
    this.selectUnidadNegocio = null;
    this.selectVentaPromedio = null;
    this.selectProyeccion = null;
    this.selectClasificacion = null;
    this.arregloFiltros = [];
    this._acerosRestService.consultaFiltros(this.arregloFiltros).subscribe(resp => {
      this.datosAceros = resp
    })
    }



}

interface columnsCabeceras {
  header: string;
  field: string;
}
