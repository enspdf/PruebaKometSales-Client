import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorService } from '../../services/Author.service';
import { EditorialService } from '../../services/Editorial.service';
import { BookService } from '../../services/Book.service';

declare var swal: any;

@Component({
    moduleId: module.id,
    selector: 'editorial',
    templateUrl: 'new.component.html',
    providers: [ AuthorService, EditorialService, BookService ]
})
export class NewBookComponent implements OnInit {

    id_author: number;
    book_name: string;
    publication_date: string;
    price: number;
    id_editorial: number;
    page_count: number;
    book_description: string;

    authors: any[];
    editorials: any[];

    result: any;

    constructor(private _authorService: AuthorService, private _editorialService: EditorialService,
                    private _bookService: BookService, private _router: Router) {

    }

    ngOnInit() {
        this._authorService.getAuthors()
            .subscribe(data => {
                this.authors = data;
            });
        this._editorialService.getEditorial() 
            .subscribe(data => {
                this.editorials = data;
            });
    }

    onSubmit() {
        if (this.id_author == null) {
            this.validatorMessage();
        } else if (this.book_name == null) {
            this.validatorMessage();
        } else if (this.publication_date == null) {
            this.validatorMessage();
        } else if (this.price == null) {
            this.validatorMessage();
        } else if (this.id_editorial == null) {
            this.validatorMessage();
        } else if (this.page_count == null) {
            this.validatorMessage();
        } else if (this.book_description == null) {
            this.validatorMessage();
        } else {
          this._bookService.saveBook(this.id_author, this.book_name, this.publication_date, this.price, this.id_editorial, this.page_count, this.book_description)
            .subscribe(result => {
              this.result = result;
              this.redirect();
            });
        }
    }

    redirect() {
        this._router.navigate(['/book']);
        this.successCreate();
    }

    validatorMessage() {
        swal('Oops...', 'Todos los campos son necesarios', 'error');
    }

    successCreate() {
        swal('Creado', 'Se ha creado correctamente', 'success');
    }
}
