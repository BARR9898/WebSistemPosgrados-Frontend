import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/core/services/Image/image.service';
import { Router } from '@angular/router';
import { MaestriasService } from 'src/app/core/services/maestrias/maestrias.service';



interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget
}

@Component({
  selector: 'app-image-form',
  templateUrl: './image-form.component.html',
  styleUrls: ['./image-form.component.css']
})
export class ImageFormComponent implements OnInit {
  file!: File;
  photoSelected: string | ArrayBuffer | any;
  roles = ["Selecione una maestría"];
  tipos = ["Selecione un tipo","Docente","Logo","Alumno"];
  allMasters:any;
  constructor(private imageService : ImageService,
    private router : Router,
    private maestriaService : MaestriasService) { }

  ngOnInit(): void {
    this.maestriaService.getAllMaestrias()
    .subscribe( masters => {
      console.log(masters)
      this.allMasters = masters
      for (let index = 0; index < this.allMasters.length; index++) {
        this.roles[index+1] = this.allMasters[index]['abreviatura_maestria']

      }
      console.log(this.roles)
    })
  }

  onPhotoSelected(event: HtmlInputEvent | any):void{
    if(event.target.files && event.target.files[0]){
      this.file = <File>event.target.files[0];
      //Image preview
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);
      console.log(this.file)
    }
  }

  uploadPhoto(title: HTMLInputElement,description: HTMLTextAreaElement , master: HTMLSelectElement,tipo: HTMLSelectElement ): boolean{



    if((title.value != '') && (description.value!='') && (this.file != null) && ( (master.value !== this.roles[0]) ) ){
      this.imageService.createImage(title.value,description.value,this.file,master.value,tipo.value)
      .subscribe(res => {
        this.router.navigate(['/admin/logos'])
      }, err => console.log(err))
      return false;
    }
    alert("Complete todos los campos.")
  }
}
