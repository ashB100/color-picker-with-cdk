# ColorPickerWithCdk

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.0.

## ColorPickerComponent
An array of color objects passed is passed in as input.

The color picker component becomes an overlay that gets open when the button is clicked.

A new instance of the component is created on every button click.

The component template is kept in `<ng-template`. A `TemplatePortal` is created out of the `<ng-template>`,
which is used as the template when the overlay is attached.

