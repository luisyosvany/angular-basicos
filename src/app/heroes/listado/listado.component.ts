import { Component } from '@angular/core';
import { ContadorComponent } from '../../contador/contador/contador.component';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
  
})
export class ListadoComponent {

  heroes: string[] = ['SpiderMan','IronMan','Hulk','Thor'];
  heroeBorrado:string = '';

  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
  }

}
