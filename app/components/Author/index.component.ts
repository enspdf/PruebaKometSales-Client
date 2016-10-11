import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../../services/Author.service';
import { Bahia } from '../../Interfaces/Bahia.interface';

@Component({
    moduleId: module.id,
    selector: 'author',
    templateUrl: 'index.component.html',
    providers: [ AuthorService ]
})
export class AuthorComponent implements OnInit {

    authors: any[];

    constructor(private _authorService: AuthorService) {

    }

    ngOnInit() {
      this._authorService.getAuthors()
        .subscribe(data => {
          this.authors = data;
        });
    }

}
