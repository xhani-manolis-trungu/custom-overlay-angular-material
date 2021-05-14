import { Component, Input, Inject } from '@angular/core';

import { FilePreviewOverlayRef } from './file-preview-overlay-ref';
import { FilePreviewOverlayService } from './file-preview-overlay.service';
import { FILE_PREVIEW_DIALOG_DATA } from './file-preview-overlay.tokens';

@Component({
  selector: 'file-preview-overlay',
  template: `
    <div class="overlay-content">
      <mat-icon class="icon" (click)="close()">cancel</mat-icon>
      <img [src]="image.url" />
    </div>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      h1 {
        margin: 0;
        padding: 1em;
      }

      .icon {
        color: white;
        position: absolute;
        top: 30px;
        left: 30px;
        bottom: 100%;
      }

      img {
        width: 100%;
        max-width: 500px;
        height: auto;
      }

      .overlay-content {
        padding: 1em;
      }
    `
  ]
})
export class FilePreviewOverlayComponent {
  constructor(
    public dialogRef: FilePreviewOverlayRef,
    @Inject(FILE_PREVIEW_DIALOG_DATA) public image: any
  ) {}

  close() {
    this.dialogRef.close();
  }
}
