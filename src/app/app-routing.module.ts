import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo:"/projectsList",pathMatch:"full" },
  { path: 'projectsList', component: ProjectListComponent },
  { path: 'createProject', component: CreateProjectComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
