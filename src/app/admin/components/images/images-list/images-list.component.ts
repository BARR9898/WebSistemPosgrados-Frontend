import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageService } from 'src/app/core/services/Image/image.service';
import { MaestriasService } from 'src/app/core/services/maestrias/maestrias.service';

@Component({
  selector: 'app-images-list',
  templateUrl: './images-list.component.html',
  styleUrls: ['./images-list.component.css']
})
export class ImagesListComponent implements OnInit {

  masters = []
  photos:any;
  constructor(private imageService : ImageService,
    private router : Router,
    private maestriaService: MaestriasService) { }

  ngOnInit(): void {
    /*Obtenemos las maestrías existentes */
    this.maestriaService.getAllMaestrias()
    .subscribe((mastersGeted:any) => {
      /*Recorremos el arreglo de maestrias existentes que obtuimos,
      obtenemos el valor de que esta en el indice 'abreviatura_maestria'
      lo asignaos a la posicion index de nuestro arreglo masters */
      for (let index = 0; index < mastersGeted.length; index++) {
        this.masters[index] = mastersGeted[index]['abreviatura_maestria']
        
      }
      console.log(this.masters)
    })
  }

  /*Redirigimos a la ruta especificada y le mandamos el valor de la abreviatura
  de la maestria como parametro para obtener solo las imagenes que coincidan 
  con dicha maestria. */
  selectedCard(master:string){
    this.router.navigate(['/admin/view-master-images',master])
  }


}
