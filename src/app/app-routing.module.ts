import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { CounterComponent } from "./counter/counter/counter.component";
import { PostsListComponent } from "./posts/posts-list/posts-list.component";
import { AddPostComponent } from "./posts/add-post/add-post.component";
import { EditPostComponent } from "./posts/edit-post/edit-post.component";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'counter',
        loadChildren: () => {
            return import('./counter/counter.module').then(m => m.CounterModule);
        }
    },
    {
        path: 'posts',
        loadChildren: () => {
            return import('./posts/posts.module').then(m => m.PostsModule);
        }
    },
    {
        path: 'auth',
        loadChildren: () => {
            return import('./auth/auth.module').then(m => m.AuthModule);
        }
    }
];


@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}



