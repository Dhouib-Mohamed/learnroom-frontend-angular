import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassroomRoutingModule } from './classroom-routing.module';
import { ClassroomCardComponent } from '@features/classroom/components/classroom-card/classroom-card.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { ClassroomListComponent } from '@features/classroom/components/classroom-list/classroom-list.component';
import { ClassroomIdComponent } from '@features/classroom/components/classroom-id/classroom-id.component';
import { ClassroomFormComponent } from '@features/classroom/components/classroom-form/classroom-form..component';
import { SharedModule } from '@shared/shared.module';
import { StudentFormComponent } from '@features/classroom/components/student-form/student-form.component';
import { ClassroomsPageComponent } from './pages/classrooms-page/classrooms-page.component';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    ClassroomCardComponent,
    ClassroomFormComponent,
    ClassroomIdComponent,
    ClassroomListComponent,
    StudentFormComponent,
    ClassroomsPageComponent,
  ],
    imports: [
        SharedModule,
        NgbNavModule,
        CommonModule,
        ClassroomRoutingModule,
        ReactiveFormsModule,
        TranslateModule,
    ],
  exports: [ClassroomCardComponent, ClassroomListComponent],
})
export class ClassroomModule {}
