import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BookService {
    private _bookUrl: string = "http://localhost:8181/PruebaKometSales/api/books/";

    constructor(private _http: Http) {

    }

    getBooks() {
        return this._http.get(this._bookUrl)
            .map(res => res.json());
    }

    getBookById(id: number) {
        return this._http.get(this._bookUrl + id)
            .map(res => res.json());
    }

    saveBook(id_author: number, book_name: string, publication_date: string, price: number, id_editorial: number, page_count: number, book_description: string) {
        let body = new URLSearchParams();
        body.set('id_author', ""+id_author);
        body.set('book_name', ""+book_name);
        body.set('publication_date', publication_date);
        body.set('price', ""+price);
        body.set('id_editorial', ""+id_editorial);
        body.set('page_count', ""+page_count);
        body.set('book_description', book_description);
        let headers = new Headers({ 'Content-Type' : 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers : headers, method : "post" });
        
        return this._http.post(this._bookUrl, body, options)
            .map(res => res.json());
    }

    updateBook(id: number, id_author: number, book_name: string, publication_date: string, price: number, id_editorial: number, page_count: number, book_description: string) {
        let body = new URLSearchParams();
        body.set('id_author', ""+id_author);
        body.set('book_name', ""+book_name);
        body.set('publication_date', publication_date);
        body.set('price', ""+price);
        body.set('id_editorial', ""+id_editorial);
        body.set('page_count', ""+page_count);
        body.set('book_description', book_description);
        let headers = new Headers({ 'Content-Type' : 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers : headers, method : "put" });
        
        return this._http.put(this._bookUrl + id, body, options)
            .map(res => res.json());
    }

    deleteBook(id: number) {
        return this._http.delete(this._bookUrl + id)
            .map(res => res.json());
    }
}