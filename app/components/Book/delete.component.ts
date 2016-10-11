import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/Book.service';
import { Router, ActivatedRoute } from '@angular/router';

declare var swal: any;

@Component({
    moduleId: module.id,
    selector: 'book',
    template: '',
    providers: [ BookService ]
})
export class DeleteBookComponent implements OnInit {
    id: number;
    result: string;

    constructor (private _bookService: BookService, private _route: ActivatedRoute, private _router: Router) {

    }

    ngOnInit() {
      this._route.params
        .map(params => params['id'])
        .subscribe((id) => {
          this._bookService.deleteBook(id)
            .subscribe(result => {
              this.result = result;
              this.redirect();
            });
        });
    }

    redirect() {
        this._router.navigate(['/book']);
        this.successDelete();
    }

    successDelete() {
        swal('Eliminado', 'Se ha eliminado correctamente', 'success');
    }
}
