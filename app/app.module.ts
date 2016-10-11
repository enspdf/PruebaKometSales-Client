import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { IndexComponent } from '../app/components/Index/index.component';

import { AuthorComponent } from '../app/components/Author/index.component';
import { NewAuthorComponent } from '../app/components/Author/new.component';
import { DeleteAuthorComponent } from '../app/components/Author/delete.component';
import { EditAuthorComponent } from '../app/components/Author/edit.component';

import { EditorialComponent } from '../app/components/Editorial/index.component';
import { NewEditorialComponent } from '../app/components/Editorial/new.component';
import { DeleteEditorialComponent } from '../app/components/Editorial/delete.component';
import { EditEditorialComponent } from '../app/components/Editorial/edit.component';

import { BookComponent } from '../app/components/Book/index.component';
import { NewBookComponent } from '../app/components/Book/new.component';
import { DeleteBookComponent } from '../app/components/Book/delete.component';
import { EditBookComponent } from '../app/components/Book/edit.component';

import { routing, appRouterProviders } from './app.routes';

@NgModule({
  imports: [ BrowserModule, FormsModule, routing ],
  declarations: [ AppComponent, IndexComponent,               
                  
                  AuthorComponent, NewAuthorComponent, DeleteAuthorComponent,
                  EditAuthorComponent, EditorialComponent, DeleteEditorialComponent,
                  NewEditorialComponent, EditEditorialComponent, BookComponent,
                  NewBookComponent, DeleteBookComponent, EditBookComponent ],
  providers: [appRouterProviders],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
