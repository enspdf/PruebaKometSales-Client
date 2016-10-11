import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorService } from '../../services/Author.service';

declare var swal: any;

@Component({
    moduleId: module.id,
    selector: 'bahia',
    templateUrl: 'new.component.html',
    providers: [ AuthorService ]
})
export class NewAuthorComponent {

    first_name: string;
    initials: string; 
    last_name: string;

    result: any;

    constructor(private _authorService: AuthorService, private _router: Router) {

    }

    onSubmit() {
        if (this.first_name == null) {
            this.validatorMessage();
        } else if (this.initials == null) {
            this.validatorMessage();
        } else if(this.last_name == null) {
            this.validatorMessage();
        } else {
          this._authorService.saveAuthor(this.first_name, this.initials, this.last_name)
            .subscribe(result => {
              this.result = result;
              this.redirect();
            });
        }
    }

    redirect() {
        this._router.navigate(['/author']);
        this.successCreate();
    }

    validatorMessage() {
        swal('Oops...', 'Todos los campos son necesarios', 'error');
    }

    successCreate() {
        swal('Creado', 'Se ha creado correctamente', 'success');
    }
}
