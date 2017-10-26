import { Component } from '@angular/core';

@Component({
  selector: 'ecpl-demo-app',
  template: `<ecpl-onlyoffice-viewer
  onlyofficeSrc="https://image.shutterstock.com/display_pic_with_logo/164881702/587008043/stock-photo-a-photo-of-the-road-near-the-dam-with-sunset-scene-587008043.jpg"
  onlyofficeType="doc" 
  onlyofficeName="Adler"
  id="hiudshhs" ></ecpl-onlyoffice-viewer>`
})
export class DemoComponent {}
