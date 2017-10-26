import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EcplOnlyofficeViewerModule } from '../src';
import { DemoComponent } from './demo.component';

@NgModule({
  declarations: [DemoComponent],
  imports: [BrowserModule, EcplOnlyofficeViewerModule.forRoot()],
  bootstrap: [DemoComponent]
})
export class DemoModule {}
