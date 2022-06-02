import { Component, OnInit } from '@angular/core';
import { MaestriasService } from 'src/app/core/services/maestrias/maestrias.service';
@Component({
  selector: 'app-select-master',
  templateUrl: './select-master.component.html',
  styleUrls: ['./select-master.component.css']
})
export class SelectMasterComponent implements OnInit {

  panelOpenState = true;
  masters: any = []
  mastersAbreviature:any = [];
  constructor(private maestriasService: MaestriasService) { }

  ngOnInit(): void {
    this.getMasters()

  }

  getMasters() {
    this.maestriasService.getAllMaestrias()
      .subscribe(res => {
        this.masters = res;
        console.log(this.masters)
        for (let index = 0; index < this.masters.length; index++) {
          this.mastersAbreviature[index] = this.masters[index]['abreviatura_maestria']
        }
        console.log(this.mastersAbreviature)
      });
  }


}
