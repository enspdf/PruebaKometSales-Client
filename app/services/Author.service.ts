import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthorService {
    private _authorUrl: string = "http://localhost:8181/PruebaKometSales/api/authors/";

    constructor(private _http: Http) {

    }

    getAuthors() {
        return this._http.get(this._authorUrl)
            .map(res => res.json());
    }

    getAuthorById(id: number) {
        return this._http.get(this._authorUrl + id)
            .map(res => res.json());
    }

    saveAuthor(first_name: string, initials: string, last_name: string) {
        let body = new URLSearchParams();
        body.set('first_name', first_name);
        body.set('initials', initials);
        body.set('last_name', last_name);
        let headers = new Headers({ 'Content-Type' : 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers : headers, method : "post" });
        
        return this._http.post(this._authorUrl, body, options)
            .map(res => res.json());
    }

    updateAuthor(id: number, first_name: string, initials: string, last_name: string) {
        let body = new URLSearchParams();
        body.set('first_name', first_name);
        body.set('initials', initials);
        body.set('last_name', last_name);
        let headers = new Headers({ 'Content-Type' : 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers : headers, method : "options" });
        
        return this._http.put(this._authorUrl + id, body, options)
            .map(res => res.json());
    }

    deleteAuthor(id: number) {
        return this._http.delete(this._authorUrl + id)
            .map(res => res.json());
    }
}