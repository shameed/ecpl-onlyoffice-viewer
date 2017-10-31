import {
  Component,
  OnInit,
  AfterViewInit,
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
  template: `
  <a href="javascript:void(0)" (click)="showModal()" id="onlyoffice-file-{{id}}">
    <img src="/assets/icons/{{onlyofficeType}}.png" alt="Office File">
  </a>

  <div class="onlyoffice-modal" [hidden]="!showModalWindow" id="onlyoffice-pop-{{id}}">
      <div class="modal-dialog">
          <div class="modal-header">
              <div style="padding: 5px;">
                  <img src="/assets/icons/{{onlyofficeType}}.png" alt="Office File" class="onlyoffice-icon-header pull-left">
                  <h3 class="pull-left">{{onlyofficeName}}</h3>
              </div>
              <button (click)="hideModal()" class="pull-right">x</button>
          </div>
          <div class="modal-body">
              <div id="placeholder"></div>
          </div>
      </div>

  </div>
  `,
  styles: [
    `
    .onlyoffice-modal {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .5);
    z-index: 10001;
    padding: 15px;
    }

    .modal-dialog {
        background-color: #fff;
        border: 1px solid #f2f2f2;
        margin-top: 0px;
        margin-bottom: 0px;
        width: 100%;
        height: 100%;
        display: table;
    }

    .modal-header {
        height: 6%;
        padding: 5px;
        display: table-row
    }

    h3 {
        margin-top: 0;
        margin-bottom: 0;
        font-size: 16px;
        padding: 5px;
    }

    button.pull-right {
        padding: 0 12px;
        background: none;
        outline: none;
        border: none;
        font-size: 25px;
        position: absolute;
        top: 0;
        right: 0;
        border-left: 1px solid #dedede;
        color: #dedede;
    }

    .modal-body {
        width: 100%;
        max-height: 94%;
        overflow: auto;
        padding: 0px;
        background: #dedede;
        display: table-cell;
        text-align: center;
        vertical-align: middle;
    }

    .modal-body .scroller {
        max-height: 94%;
        overflow: auto;
    }

    .onlyoffice-icon-header {
        width: 20px;
        height: auto;
    }
    `
  ]
})
export class EcplOnlyofficeViewerComponent implements OnInit, AfterViewInit {
  @Input() id: string;
  @Input() onlyofficeSrc: string;
  @Input() onlyofficeName: string;
  @Input() onlyofficeType: string;
  @Input() onlyofficeKey: string;

  editorConfig: any;
  docEditor: any;
  showModalWindow: boolean = false;

  constructor(private renderer: Renderer2) {}

  showModal() {
    this.showModalWindow = true;
    this.renderer.addClass(document.body, 'modal-open');
    console.log('EdiConfig:', this.editorConfig, 'test:', this.onlyofficeSrc);
    // tslint:disable-next-line:prefer-const
    this.docEditor = new DocsAPI.DocEditor('placeholder', this.editorConfig);
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

  ngAfterViewInit() {
    this.editorConfig = {
      documentType: 'text',
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
        callbackUrl: 'http://example.com/url-to-callback.ashx',
        lang: 'en-US',
        mode: 'edit',
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
  }
}
