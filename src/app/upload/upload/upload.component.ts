import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {UploadService} from '../upload.service';
import {forkJoin} from 'rxjs';
import {DialogComponent} from '../dialog/dialog.component';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.less']
})
export class UploadComponent {
  constructor(public uploadService: UploadService) {}


  @ViewChild('file') file;
  public files: Set<File> = new Set();

  progress;
  canBeClosed = true;
  uploading = false;
  uploadSuccessful = false;
  uploadButtonText = 'Przeglądaj';

  @Input() urlPart: string;

  addFiles() {
    if(this.uploadSuccessful)
      this.files.clear();
    this.file.nativeElement.click();
  }

  onFilesAdded() {
    const files: { [key: string]: File } = this.file.nativeElement.files;
    for (let key in files) {
      if (!isNaN(parseInt(key))) {
        this.files.add(files[key]);
      }
    }
  }

  closeDialog() {
    // set the component state to "uploading"
    this.uploading = true;

    // start the upload and save the progress map
    this.progress = this.uploadService.upload(this.files, this.urlPart);

    // convert the progress map into an array
    let allProgressObservables = [];
    for (let key in this.progress) {
      allProgressObservables.push(this.progress[key].progress);
    }


    // When all progress-observables are completed...
    forkJoin(allProgressObservables).subscribe(end => {
      // ... the upload was successful...
      this.uploadSuccessful = true;
      this.uploadButtonText = 'Dodaj kolejne';
      // ... and the component is no longer uploading
      this.uploading = false;
    });
  }

}
