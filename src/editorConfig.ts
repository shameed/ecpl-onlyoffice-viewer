export class EditorConfig {
  documentType: string;
  document: {
    fileType: string;
    key: string;
    title: string;
    url: string;
    permissions: {
      comment: boolean;
      download: boolean;
      edit: boolean;
      print: boolean;
      review: boolean;
    };
  };
  editorConfig: {
    callbackUrl: string;
    lang: string;
    mode: string;
    customization: {
      chat: boolean;
      comments: boolean;
      compactToolbar: boolean;
      feedback: boolean;
      forcesave: boolean;
      goback: boolean;
      showReviewChanges: boolean;
      zoom: number;
    };
  };
  events: {
    onDocumentStateChange: any;
  };
}
