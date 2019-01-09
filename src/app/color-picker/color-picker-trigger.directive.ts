import { Directive, ElementRef, Input, ViewContainerRef } from '@angular/core';
import { OverlayRef, Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ColorPickerComponent } from './color-picker.component';
import { TemplatePortal } from '@angular/cdk/portal';
import { first } from 'rxjs/internal/operators';

@Directive({
  selector: '[appColorPickerTrigger]',
  host: {
    '(click)': 'click($event)'
  }
})
export class ColorPickerTriggerDirective {
  private _overlayRef: OverlayRef;
  @Input('appColorPickerTrigger') colorPicker: ColorPickerComponent;

  constructor(public overlay: Overlay,
              private elementRef: ElementRef,
              private viewContainerRef: ViewContainerRef) { }

  private init() {
    const overlayConfig = new OverlayConfig({
      maxWidth: 250,
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop'
    });

    this._overlayRef = this.overlay.create(overlayConfig);

    this._overlayRef
      .backdropClick()
      .subscribe(() => this._overlayRef.detach());
  }

  click() {
    if(!this._overlayRef) {
      this.init();
    }

    // Listen to colorChange event emitter
    // Close the overlay when a value is selected
    this.colorPicker.colorChange
      .pipe(first())
      .subscribe(() => this._overlayRef.detach());

    this._overlayRef.detach();
    const picker = new TemplatePortal(this.colorPicker.template, this.viewContainerRef);
    this._overlayRef.attach(picker);
  }
}
