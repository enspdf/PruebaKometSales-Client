import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EditorialService } from '../../services/Editorial.service';

declare var swal: any;

@Component({
    moduleId: module.id,
    selector: 'editorial',
    templateUrl: 'new.component.html',
    providers: [ EditorialService ]
})
export class NewEditorialComponent {

    editorial_name: string;

    result: any;

    constructor(private _editorialService: EditorialService, private _router: Router) {

    }

    onSubmit() {
        if (this.editorial_name == null) {
            this.validatorMessage();
        } else {
          this._editorialService.saveEditorial(this.editorial_name)
            .subscribe(result => {
              this.result = result;
              this.redirect();
            });
        }
    }

    redirect() {
        this._router.navigate(['/editorial']);
        this.successCreate();
    }

    validatorMessage() {
        swal('Oops...', 'Todos los campos son necesarios', 'error');
    }

    successCreate() {
        swal('Creado', 'Se ha creado correctamente', 'success');
    }
}
