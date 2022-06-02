import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilesService } from 'src/app/core/services/Files/files.service';
import { MaestriasService } from 'src/app/core/services/maestrias/maestrias.service';

@Component({
  selector: 'app-files-list',
  templateUrl: './files-list.component.html',
  styleUrls: ['./files-list.component.css']
})
export class FilesListComponent implements OnInit {

  masters = []
  files:[] |  any;
  msc_files:number = 0;
  marq_files:number = 0;
  madm_files:number = 0;

  constructor(private fileService : FilesService,
    private router : Router,
    private maestriaService : MaestriasService) { }

  ngOnInit(): void {
    this.maestriaService.getAllMaestrias()
    .subscribe((res:any) => {
      for (let index = 0; index < res.length; index++) {
        this.masters[index] = res[index]['abreviatura_maestria']
        
      }
    })


  }

  selectedCard(master:string){
    this.router.navigate(['/admin/view-master-files',master])
  }





}
