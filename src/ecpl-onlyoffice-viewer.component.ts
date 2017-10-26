import {
  Component,
  OnInit,
  Input,
  Renderer2,
  OnDestroy,
  ViewChild,
  ElementRef
} from '@angular/core';
import './js/onlyoffice-api.js';

declare var DocsAPI: any;

@Component({
  selector: 'ecpl-onlyoffice-viewer',
  templateUrl: '/src/ecpl-onlyoffice-viewer.component.html',
  styleUrls: ['../src/ecpl-onlyoffice-viewer.component.css']
})
export class EcplOnlyofficeViewerComponent implements OnInit {
  @Input() id: string;
  @Input() onlyofficeSrc: string;
  @Input() onlyofficeName: string;
  @Input() onlyofficeType: string;
  @Input() onlyofficeKey: string;
  docEditor: any;
  showModalWindow: boolean = false;

  EditorConfig = {
    document: {
      fileType: this.onlyofficeType,
      key: this.onlyofficeKey,
      title: this.onlyofficeName,
      url: this.onlyofficeSrc,
      permissions: {
        comment: false,
        download: true,
        edit: false,
        print: true,
        review: false
      }
    },
    editorConfig: {
      // "callbackUrl": "http://example.com/url-to-callback.ashx",
      lang: 'en-US',
      mode: 'edit',
      plugins: {},
      customization: {
        chat: false,
        comments: false,
        compactToolbar: true,
        feedback: false,
        forcesave: false,
        goback: false,
        showReviewChanges: false,
        zoom: 100
      }
    },
    events: {
      onDocumentStateChange: this.onDocumentStateChange
    }
  };
  constructor(private renderer: Renderer2) {}

  showModal() {
    this.showModalWindow = true;
    this.renderer.addClass(document.body, 'modal-open');
    // tslint:disable-next-line:prefer-const
    this.docEditor = new DocsAPI.DocEditor('placeholder', this.EditorConfig);
  }

  hideModal() {
    this.showModalWindow = false;
    this.renderer.removeClass(document.body, 'modal-open');
    this.docEditor.destroyEditor();
  }

  onDocumentStateChange(event: any) {
    if (event.data) {
      console.log('The document changed');
    } else {
      console.log('Changes are collected on document editing service');
    }
  }

  ngOnInit() {}
}
