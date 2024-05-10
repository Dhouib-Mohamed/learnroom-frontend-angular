import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-element-details',
  templateUrl: './element-details.component.html',
  styleUrls: ['./element-details.component.scss'],
})
export class ElementDetailsComponent {
  @Input() isTeacher=false;
  @Input() element: any = {};
  @Input() elementType = '';
  @Input() editMode = false;

  @Output() deleteElement = new EventEmitter();
  @Output() editModeChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  toggleEditMode() {
    this.editMode = !this.editMode;
    this.editModeChange.emit(this.editMode);
  }
  deleteFunction() {
     this.deleteElement.emit()
  }

  constructor() {}
}
