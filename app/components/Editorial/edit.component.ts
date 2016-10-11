import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EditorialService } from '../../services/Editorial.service';

declare var swal: any;

@Component({
    moduleId: module.id,
    selector: 'editorial',
    templateUrl: 'edit.component.html',
    providers: [ EditorialService ]
})
export class EditEditorialComponent implements OnInit {
    id: number;
    editorial: any;

    constructor(private _editorialService: EditorialService, private _route: ActivatedRoute, private _router: Router) {
        
    }

    ngOnInit() {
      this._route.params
        .map(params => params['id'])
        .subscribe((id) => {
          this._editorialService.getEditorialById(id)
            .subscribe(result => {
              this.editorial = result;
              
            });
        });
    }

    onSubmit() {
        if (this.editorial.editorial_name == null) {
            this.validatorMessage();
        } else {
          this._editorialService.updateEditorial(this.editorial.id, this.editorial.editorial_name)
            .subscribe(data => {
              this.redirect();
              this.successUpdate();
            });
        }
    }

    redirect() {
        this._router.navigate(['/editorial']);
    }

    validatorMessage() {
        swal('Oops...', 'Todos los campos son necesarios', 'error');
    }

    successUpdate() {
        swal('Actualizado', 'Ha sido actualizado correctamente', 'success');
    }
}
