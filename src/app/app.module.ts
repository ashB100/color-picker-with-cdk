import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { ColorPickerTriggerDirective } from './color-picker/color-picker-trigger.directive';

@NgModule({
  declarations: [
    AppComponent,
    ColorPickerComponent,
    ColorPickerTriggerDirective
  ],
  imports: [
    BrowserModule,
    OverlayModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
