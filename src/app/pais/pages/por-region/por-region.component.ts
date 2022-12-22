import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
  button {
      margin-right: 5px;
      background-color: #576a9e;
  }
  button:hover, button:focus{
    background-color: #5377d9;
  }
  `
]
})
export class PorRegionComponent  {

  regiones: string[] = [ 'africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string='';
  paises: Country[]= [];

  constructor(private paisService: PaisService) { }

  activarRegion(region: string){

    if ( region === this.regionActiva ){ return; }
    this.regionActiva = region;
    this.paises = [];

    //TODO: hacer el llamado al servicio
    this.paisService.buscarRegion(region)
    .subscribe(paises=>{
      console.log(paises);
      this.paises = paises;
    })
  }
  

}
