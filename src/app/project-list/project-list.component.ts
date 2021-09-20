import { Router } from '@angular/router';
import { IProject } from './../../Projects/project.model';
import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects: IProject[];
  loading = false;
  showModalBox: boolean = false;
  displayStyle = "none";
  projectName="";
  projectId : number;

  constructor(private projectService : ProjectService, private _router : Router) { }

  ngOnInit() {
    this.loading = true;
    this.getProjects(); 
  }

  getProjects() {
    this.projectService.getProjects().subscribe(
      (projectsList) => {
        if (projectsList) {
          this.loading = true;
          this.projects = projectsList
        }
      },
      (err) => console.log(err)
    );
  }

  open() {
       //alert("Hi");
       // Open the  modal
       this.showModalBox = true;
  }

  
  
  openPopup(project) {
    this.displayStyle = "block";
    this.projectName  = project.name;
    this.projectId = project.id;
  }
  closePopup() {
    this.displayStyle = "none";
  }

  archieve(){
    this.projectService.deleteProject(this.projectId).subscribe((list)=> {
      this.displayStyle = "none";
      this.getProjects();
     });
  }

  addProject(){
    this._router.navigate(['createProject'])
  }

}
