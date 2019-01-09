import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent {
  @Input() colors: object[];
  @Input() color: object;
  @Output() colorChange: EventEmitter<object> = new EventEmitter();

  @ViewChild(TemplateRef) template: TemplateRef<any>;

  select(color) {
    this.colorChange.emit(color);
    console.log('selected color', color);
  }

}
