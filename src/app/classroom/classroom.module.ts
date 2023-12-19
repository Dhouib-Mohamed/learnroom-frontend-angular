import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ClassroomRoutingModule} from "./classroom-routing.module";
import {ClassroomCardComponent} from "./components/Cards/classroom-card/classroom-card.component";
import { ClassroomDetailComponent } from './components/classroom-detail/classroom-detail.component';
import {TaskModule} from "../task/task.module";
import {NgbNavModule} from "@ng-bootstrap/ng-bootstrap";
import {AssignmentModule} from "../assignment/assignment.module";
import {CourseModule} from "../course/course.module";
import {ClassroomFormComponent} from "../modals/classroom-form/classroom-form..component";
import {ClassroomIdComponent} from "../modals/classroom-id/classroom-id.component";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [ClassroomCardComponent,
    ClassroomDetailComponent,
    ClassroomFormComponent,
    ClassroomIdComponent
  ],
  imports: [
    NgbNavModule,
    CommonModule,
    ClassroomRoutingModule,
    TaskModule,
    AssignmentModule,
    CourseModule,
    ReactiveFormsModule
  ],
  exports:[
  ]
})
export class ClassroomModule { }
