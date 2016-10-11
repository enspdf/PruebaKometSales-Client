import { Component, OnInit } from '@angular/core';
import { BahiaService } from '../../services/Bahia.service';
import { Bahia } from '../../Interfaces/Bahia.interface';

@Component({
    moduleId: module.id,
    selector: 'bahia',
    templateUrl: 'index.component.html',
    providers: [ BahiaService ]
})
export class BahiaComponent implements OnInit {

    bahias: Bahia[];

    constructor(private _bahiaService: BahiaService) {

    }

    ngOnInit() {
      this._bahiaService.getBahias()
        .subscribe(data => {
          this.bahias = data;
        });
    }

}
