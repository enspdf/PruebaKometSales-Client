import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

declare var swal: any;

@Component({
    moduleId: module.id,
    selector: 'index',
    templateUrl: 'index.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class IndexComponent implements OnInit {

    ngOnInit() {
        swal({
            title: 'Library Shop',
            text: 'Los mejores libros y las mejores marcas al mejor precio',
            timer: 2000,
            showConfirmButton: false
        });
    }

 }
