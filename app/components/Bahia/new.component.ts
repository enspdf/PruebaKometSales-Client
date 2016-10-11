import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BahiaService } from '../../services/Bahia.service';
import { ParqueaderoService } from '../../services/Parqueadero.service';
import { Parqueadero } from '../../Interfaces/Parqueadero.interface';

declare var swal: any;

@Component({
    moduleId: module.id,
    selector: 'bahia',
    templateUrl: 'new.component.html',
    providers: [ BahiaService, ParqueaderoService ]
})
export class NewBahiaComponent implements OnInit {

    idParqueadero: number;
    Disponible: string;
    parqueaderos: Parqueadero[];
    result: string;

    constructor(private _bahiaService: BahiaService, private _parqueaderoService: ParqueaderoService, private _router: Router) {

    }

    ngOnInit() {
      this._parqueaderoService.getParqueaderos()
        .subscribe(result => {
          this.parqueaderos = result;
        });
    }

    onSubmit() {
        if (this.idParqueadero == null) {
            this.validatorMessage();
        } else if (this.Disponible == null) {
            this.validatorMessage();
        } else {
          this._bahiaService.saveBahia(this.idParqueadero, this.Disponible)
            .subscribe(result => {
              this.result = result;
              this.redirect();
            });
        }
    }

    redirect() {
        this._router.navigate(['/bahias']);
        this.successCreate();
    }

    validatorMessage() {
        swal('Oops...', 'Todos los campos son necesarios', 'error');
    }

    successCreate() {
        swal('Creado', 'La bahia se ha creado correctamente', 'success');
    }
}
