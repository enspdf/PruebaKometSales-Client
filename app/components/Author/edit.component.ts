import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthorService } from '../../services/Author.service';
import { Author } from '../../Interfaces/Author.interface';

declare var swal: any;

@Component({
    moduleId: module.id,
    selector: 'author',
    templateUrl: 'edit.component.html',
    providers: [ AuthorService ]
})
export class EditAuthorComponent implements OnInit {
    id: number;
    author: Author;

    constructor(private _authorService: AuthorService, private _route: ActivatedRoute, private _router: Router) {
        
    }

    ngOnInit() {
      this._route.params
        .map(params => params['id'])
        .subscribe((id) => {
          this._authorService.getAuthorById(id)
            .subscribe(result => {
              this.author = result;
            });
        });
    }

    onSubmit() {
        if (this.author.first_name == null) {
            this.validatorMessage();
        } else if (this.author.initials == null) {
            this.validatorMessage();
        } else if (this.author.last_name == null) {
            this.validatorMessage();
        } else {
          this._authorService.updateAuthor(this.author.id, this.author.first_name, this.author.initials, this.author.last_name)
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
        swal('Actualizado', 'Ha sido actualizado correctamente', 'success');
    }
}
