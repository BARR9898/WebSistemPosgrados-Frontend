import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { FilesService } from 'src/app/core/services/Files/files.service';
@Component({
  selector: 'app-view-master-file',
  templateUrl: './view-master-file.component.html',
  styleUrls: ['./view-master-file.component.css']
})
export class ViewMasterFileComponent implements OnInit {

  master_name!: string;
  files:any;
  files_master:any = [];
  constructor(private filesService : FilesService,
    private activateRoute :ActivatedRoute,
    private router : Router) { }

  ngOnInit(): void {

    this.activateRoute.params.subscribe(
      params => {
        this.master_name= params['master']
      })
      this.filesService.getFiles()
        .subscribe(res => {
        this.files = res;
        console.log(this.files)
        let aux:number = 0;
        for (let index = 0; index < this.files.length; index++) {       
          if (this.files[index]['master'] == this.master_name) {
            aux++;
            this.files_master[aux-1] = this.files[index]
            console.log(this.files_master)
          
            
          }
        
        }
        
        
    })
  }

  deleteImage(id:string){
    if(confirm("¿Desea eliminar éste elemento?")){
      this.filesService.deleteFile(id)
      .subscribe(res => {
        this.router.navigate(['/admin/files'])
      })
    }
    this.router.navigate(['/admin/files-list'])
  }


}
