import { Component, OnInit } from '@angular/core';
import { EditorialService } from '../../services/Editorial.service';

@Component({
    moduleId: module.id,
    selector: 'editorial',
    templateUrl: 'index.component.html',
    providers: [ EditorialService ]
})
export class EditorialComponent implements OnInit {

    editorials: any[];

    constructor(private _editorialService: EditorialService) {

    }

    ngOnInit() {
      this._editorialService.getEditorial()
        .subscribe(data => {
          this.editorials = data;
        });
    }

}
