import { ProjectService } from './../project.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProject } from 'src/Projects/project.model';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css'],
})
export class CreateProjectComponent implements OnInit {
  projectForm: FormGroup;
  project: IProject;
  pageTitle: string;
  submitted = false;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private _router: Router,
    private _projectService: ProjectService
  ) {}

  ngOnInit() {
    this.projectForm = this.fb.group({
      name: ['',[Validators.required, Validators.maxLength(100)]],
      status: ['',Validators.required],
      dateCreated: [''],
      archived: [''],
    });

    this.route.paramMap.subscribe((params) => {
      const empId = +params.get('id');

      this.pageTitle = 'Create Employee';
      this.project = {
        id: null,
        name: '',
        status: null,
        // doj: null,
        dateCreated: new Date().toString(),
        archived: false,
      };
    });
  }

  get f() { return this.projectForm.controls; }
  
  onSubmit(): void {
    this.submitted = true;
    if (this.projectForm.invalid) {
      return;
    } else {
      this.mapFormValuesToEmployeeModel();
      this._projectService.addProject(this.project).subscribe(
        () => this._router.navigate(['projectsList']),
        (err: any) => console.log(err)
      );
    }
    
  }
  mapFormValuesToEmployeeModel() {
    this.project.name = this.projectForm.value.name;
    this.project.status = this.projectForm.value.status;
    this.project.dateCreated = new Date().toString();
    this.project.archived = false;
    // this.employee.doj = this.employeeForm.value.doj;
  }
}
