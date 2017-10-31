import { Component } from '@angular/core';

@Component({
  selector: 'ecpl-demo-app',
  template: `
  <ecpl-onlyoffice-viewer 
  onlyofficeSrc="https://easychair.org/publications/easychair.docx" 
  onlyofficeKey="someUniqueKey" 
  onlyofficeType="docx" 
  onlyofficeName="Adler.docx"
  id="hiudshhs" ></ecpl-onlyoffice-viewer>
  `
})
export class DemoComponent {}
