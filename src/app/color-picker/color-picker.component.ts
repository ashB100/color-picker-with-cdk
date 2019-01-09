import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
  // animation will expand, contract, and fade in depending on
  // whether the datepicker is open or closed
  animations: [
    trigger('picker', [
      state('void', style({
        transform: 'scale(0)',
        opacity: 0
      })),
      transition('void <=> *', [
        style({
          opacity: 1
        }),
        animate('550ms cubic-bezier(0.25, 0.8, 0.25, 1)')
      ])
    ])
  ]
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
