import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/Book.service';

@Component({
    moduleId: module.id,
    selector: 'book',
    templateUrl: 'index.component.html',
    providers: [ BookService ]
})
export class BookComponent implements OnInit {

    books: any[];

    constructor(private _bookService: BookService) {

    }

    ngOnInit() {
      this._bookService.getBooks()
        .subscribe(data => {
          this.books = data;
        });
    }

}
