import { Component, OnInit } from '@angular/core';
import { BahiaService } from '../../services/Bahia.service';
import { Router, ActivatedRoute } from '@angular/router';

declare var swal: any;

@Component({
    moduleId: module.id,
    selector: 'bahia',
    template: '',
    providers: [ BahiaService ]
})
export class DeleteBahiaComponent implements OnInit {
    id: number;
    result: string;

    constructor (private _bahiaService: BahiaService, private _route: ActivatedRoute, private _router: Router) {

    }

    ngOnInit() {
      this._route.params
        .map(params => params['id'])
        .subscribe((id) => {
          this._bahiaService.deleteBahia(id)
            .subscribe(result => {
              this.result = result;
              this.redirect();
            });
        });
    }

    redirect() {
        this._router.navigate(['/bahias']);
        this.successDelete();
    }

    successDelete() {
        swal('Eliminado', 'La bahia se ha eliminado correctamente', 'success');
    }
}
