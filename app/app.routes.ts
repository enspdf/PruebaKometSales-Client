import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/Index/index.component';

import { AuthorComponent } from './components/Author/index.component';
import { NewAuthorComponent } from './components/Author/new.component';
import { DeleteAuthorComponent } from './components/Author/delete.component';
import { EditAuthorComponent } from './components/Author/edit.component';

import { EditorialComponent } from './components/Editorial/index.component';
import { NewEditorialComponent } from './components/Editorial/new.component';
import { DeleteEditorialComponent } from './components/Editorial/delete.component';
import { EditEditorialComponent } from './components/Editorial/edit.component';

import { BookComponent } from './components/Book/index.component';
import { NewBookComponent } from './components/Book/new.component';
import { DeleteBookComponent } from './components/Book/delete.component';
import { EditBookComponent } from './components/Book/edit.component';

const routes: Routes = [
    {
        path: '',
        component: IndexComponent
    },
    {
        path: 'author',
        children: [
            {
                path: '',
                component: AuthorComponent
            },
            {
                path: 'new',
                component: NewAuthorComponent
            },
            {
                path: 'delete/:id',
                component: DeleteAuthorComponent
            },
            {
                path: 'edit/:id',
                component: EditAuthorComponent
            }
        ]
    },
    {
        path: 'editorial',
        children: [
            {
                path: '',
                component: EditorialComponent
            },
            {
                path: 'new',
                component: NewEditorialComponent
            },
            {
                path: 'delete/:id',
                component: DeleteEditorialComponent
            },
            {
                path: 'edit/:id',
                component: EditEditorialComponent
            }
        ]
    },
    {
        path: 'book',
        children: [
            {
                path: '',
                component: BookComponent
            },
            {
                path: 'new',
                component: NewBookComponent
            },
            {
                path: 'delete/:id',
                component: DeleteBookComponent
            },
            {
                path: 'edit/:id',
                component: EditBookComponent
            }
        ]  
    }
];

export const appRouterProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);
