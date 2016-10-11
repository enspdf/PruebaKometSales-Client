import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthorService } from '../../services/Author.service';
import { EditorialService } from '../../services/Editorial.service';
import { BookService } from '../../services/Book.service';

declare var swal: any;

@Component({
    moduleId: module.id,
    selector: 'editorial',
    templateUrl: 'edit.component.html',
    providers: [ AuthorService, EditorialService, BookService ]
})
export class EditBookComponent implements OnInit {
    book: any;
    editorials: any[];
    authors: any[];

    constructor(private _authorService: AuthorService, private _bookService: BookService, private _editorialService: EditorialService, private _route: ActivatedRoute, private _router: Router) {
        
    }

    ngOnInit() {
      this._route.params
        .map(params => params['id'])
        .subscribe((id) => {
          this._bookService.getBookById(id)
            .subscribe(result => {
              this.book = result;          
            });
        });
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
        if (this.book.id_author == null) {
            this.validatorMessage();
        } else if (this.book.book_name == null) {
            this.validatorMessage();
        } else if (this.book.publication_date == null) {
            this.validatorMessage();
        } else if (this.book.price == null) {
            this.validatorMessage();
        } else if (this.book.id_editorial == null) {
            this.validatorMessage();
        } else if (this.book.page_count == null) {
            this.validatorMessage();
        } else if (this.book.book_description == null) {
            this.validatorMessage();
        } else {
          this._bookService.updateBook(this.book.id, this.book.id_author, this.book.book_name, this.book.publication_date, this.book.price, this.book.id_editorial, this.book.page_count, this.book.book_description)
            .subscribe(data => {
              this.redirect();
              this.successUpdate();
            });
        }
    }

    redirect() {
        this._router.navigate(['/book']);
    }

    validatorMessage() {
        swal('Oops...', 'Todos los campos son necesarios', 'error');
    }

    successUpdate() {
        swal('Actualizado', 'Ha sido actualizado correctamente', 'success');
    }
}
