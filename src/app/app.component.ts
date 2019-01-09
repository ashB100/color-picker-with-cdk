import { AfterViewInit, Component, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { TemplatePortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'color-picker-with-cdk';

  selectedColor = {
    name: 'Indigo',
    value: '#3F51B5'
  };

  colors = [
    {name: 'Red', value: '#F44336'},
    {name: 'Pink', value: '#E91E63'},
    {name: 'Purple', value: '#9C27B0'},
    {name: 'Deep Purple', value: '#673AB7'},
    {name: 'Indigo', value: '#3F51B5'},
    {name: 'Blue', value: '#2196F3'},
    {name: 'Light Blue', value: '#03A9F4'},
    {name: 'Cyan', value: '#00BCD4'},
    {name: 'Teal', value: '#009688'},
    {name: 'Green', value: '#4CAF50'},
    {name: 'Light Green', value: '#8BC34A'},
    {name: 'Lime', value: '#CDDC39'},
    {name: 'Yellow', value: '#FFEB3B'},
    {name: 'Amber', value: '#FFC107'},
    {name: 'Orange', value: '#FF9800'},
    {name: 'Deep Orange', value: '#FF5722'},
    {name: 'Brown', value: '#795548'},
    {name: 'Grey', value: '#9E9E9E'},
    {name: 'Blue Grey', value: '#607D8B'}
  ];
}

