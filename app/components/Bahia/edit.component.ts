import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParqueaderoService } from '../../services/Parqueadero.service';
import { BahiaService } from '../../services/Bahia.service';
import { Bahia } from '../../Interfaces/Bahia.interface';
import { Parqueadero } from '../../Interfaces/Parqueadero.interface';

declare var swal: any;

@Component({
    moduleId: module.id,
    selector: 'bahia',
    templateUrl: 'edit.component.html',
    providers: [ BahiaService, ParqueaderoService ]
})
export class EditBahiaComponent implements OnInit {
    id: number;
    bahia: Bahia;
    parqueaderos: Parqueadero[];

    constructor(private _parqueaderoService: ParqueaderoService,
      private _bahiaService: BahiaService, private _route: ActivatedRoute, private _router: Router) {

    }

    ngOnInit() {
      this._route.params
        .map(params => params['id'])
        .subscribe((id) => {
          this._bahiaService.getBahiaById(id)
            .subscribe(result => {
              this.bahia = result;
            });
        });
      this._parqueaderoService.getParqueaderos()
        .subscribe(result => {
          this.parqueaderos = result;
        });
    }

    onSubmit() {
        if (this.bahia.Disponible == null) {
            this.validatorMessage();
        } else {
          this._bahiaService.updateBahia(this.bahia.IdBahia, this.bahia.idParqueadero, this.bahia.Disponible)
            .subscribe(data => {
              this.redirect();
              this.successUpdate();
            });
        }
    }

    redirect() {
        this._router.navigate(['/bahias']);
    }

    validatorMessage() {
        swal('Oops...', 'Todos los campos son necesarios', 'error');
    }

    successUpdate() {
        swal('Actualizado', 'La bahia ha sido actualizada correctamente', 'success');
    }
}
