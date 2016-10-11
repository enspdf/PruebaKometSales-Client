import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../../services/Author.service';
import { Router, ActivatedRoute } from '@angular/router';

declare var swal: any;

@Component({
    moduleId: module.id,
    selector: 'author',
    template: '',
    providers: [ AuthorService ]
})
export class DeleteAuthorComponent implements OnInit {
    id: number;
    result: string;

    constructor (private _authorService: AuthorService, private _route: ActivatedRoute, private _router: Router) {

    }

    ngOnInit() {
      this._route.params
        .map(params => params['id'])
        .subscribe((id) => {
          this._authorService.deleteAuthor(id)
            .subscribe(result => {
              this.result = result;
              this.redirect();
            });
        });
    }

    redirect() {
        this._router.navigate(['/author']);
        this.successDelete();
    }

    successDelete() {
        swal('Eliminado', 'Se ha eliminado correctamente', 'success');
    }
}
