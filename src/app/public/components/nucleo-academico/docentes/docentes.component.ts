import { Component, OnInit } from '@angular/core';
import { MaestriasService } from 'src/app/core/services/maestrias/maestrias.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ImageService } from 'src/app/core/services/Image/image.service';
import { Image } from 'src/app/core/models/Image/image';
import { log } from 'console';
@Component({
  selector: 'app-docentes',
  templateUrl: './docentes.component.html',
  styleUrls: ['./docentes.component.css']
})
export class DocentesComponent implements OnInit {

  panelOpenState = true;
  _id: string
  master: any
  abreviature:string
  docentes: any

  images:any=[];
  docentesImages:any;
  DCurriculum: string
  DEspecialidad: string
  DGrado_academico: string
  DNombre: string
  DTiempo: string
  DImage:any=[];

  constructor(
    public maestriasService: MaestriasService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private imageService: ImageService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this._id = this.activatedRoute.snapshot.paramMap.get('id')
      this.abreviature = this.activatedRoute.snapshot.paramMap.get('master')
      console.log(this._id)
      console.log(this.abreviature)
      this.maestriasService.getMaestria(this._id)
        .subscribe(getedMaster => {
          this.master = getedMaster
          this.docentes = this.master['docentes']['NADocentes']





        });




        this.imageService.getImages().subscribe
        ( res => {
          this.images = res;
          console.log(this.images)
          let aux = 0;
          for (let index = 0; index < this.images.length; index++) {
            if ((this.images[index]['master'] === this.abreviature) && (this.images[index]['tipo'] === 'Docente')) {
              this.DImage[aux] = this.images[index]
              aux++;
            }

          }
          console.log(this.DImage)
        })

        console.log(this.docentes);
    });
  }

}
