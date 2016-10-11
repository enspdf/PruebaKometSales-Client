import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EditorialService {
    private _editorialUrl: string = "http://localhost:8181/PruebaKometSales/api/editorials/";

    constructor(private _http: Http) {

    }

    getEditorial() {
        return this._http.get(this._editorialUrl)
            .map(res => res.json());
    }

    getEditorialById(id: number) {
        return this._http.get(this._editorialUrl + id)
            .map(res => res.json());
    }

    saveEditorial(editorial_name: string) {
        let body = new URLSearchParams();
        body.set('editorial_name', editorial_name);
        let headers = new Headers({ 'Content-Type' : 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers : headers, method : "post" });
        
        return this._http.post(this._editorialUrl, body, options)
            .map(res => res.json());
    }

    updateEditorial(id: number, editorial_name: string) {
        let body = new URLSearchParams();
        body.set('editorial_name', editorial_name);
        let headers = new Headers({ 'Content-Type' : 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers : headers, method : "put" });
        
        return this._http.put(this._editorialUrl + id, body, options)
            .map(res => res.json());
    }

    deleteEditorial(id: number) {
        return this._http.delete(this._editorialUrl + id)
            .map(res => res.json());
    }
}