import { Component, OnInit } from '@angular/core';
import { EditorialService } from '../../services/Editorial.service';
import { Router, ActivatedRoute } from '@angular/router';

declare var swal: any;

@Component({
    moduleId: module.id,
    selector: 'author',
    template: '',
    providers: [ EditorialService ]
})
export class DeleteEditorialComponent implements OnInit {
    id: number;
    result: string;

    constructor (private _editorialService: EditorialService, private _route: ActivatedRoute, private _router: Router) {

    }

    ngOnInit() {
      this._route.params
        .map(params => params['id'])
        .subscribe((id) => {
          this._editorialService.deleteEditorial(id)
            .subscribe(result => {
              this.result = result;
              this.redirect();
            });
        });
    }

    redirect() {
        this._router.navigate(['/editorial']);
        this.successDelete();
    }

    successDelete() {
        swal('Eliminado', 'Se ha eliminado correctamente', 'success');
    }
}
