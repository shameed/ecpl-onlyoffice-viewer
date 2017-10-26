import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcplOnlyofficeViewerComponent } from './ecpl-onlyoffice-viewer.component';

@NgModule({
  declarations: [EcplOnlyofficeViewerComponent],
  imports: [CommonModule],
  exports: [EcplOnlyofficeViewerComponent]
})
export class EcplOnlyofficeViewerModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: EcplOnlyofficeViewerModule
    };
  }
}
