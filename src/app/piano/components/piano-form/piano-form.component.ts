import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PianoService } from 'src/app/service/piano.service';
import { PianoFormData } from 'src/app/core/models/pianoFormData';
import { Piano } from '../../../core/models/piano';

@Component({
  selector: 'app-piano-form',
  templateUrl: './piano-form.component.html',
  styleUrls: ['./piano-form.component.scss'],
})
export class PianoFormComponent implements OnInit {
  isUpdateMode: boolean;
  pianoForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _pianoService: PianoService,
    private _snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<PianoFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PianoFormData
  ) {
    this.isUpdateMode = this.data.isUpdateMode;
  }

  ngOnInit(): void {
    this.initFormBuilder();
  }

  initFormBuilder() {
    this.pianoForm = this._formBuilder.group({
      id: [
        this.data.isUpdateMode
          ? this.data.pianoToUpdate.id
          : this.data.idToCreate,
        Validators.required,
      ],
      pianoName: [
        this.data.isUpdateMode ? this.data.pianoToUpdate.pianoName : '',
        Validators.required,
      ],
      brand: [
        this.data.isUpdateMode ? this.data.pianoToUpdate.brand : '',
        Validators.required,
      ],
    });
  }

  closeForm(id?: number) {
    this.pianoForm.reset();
    this.dialogRef.close(id);
  }

  onSubmit(piano: Piano) {
    if (this.pianoForm.valid) {
      if (this.data.isUpdateMode) {
        // update
        this._pianoService.update(piano).subscribe((response) => {
          this.closeForm(piano.id);
          this._snackBar.open(response, '', {
            duration: 2000,
            panelClass: ['mat-toolbar', 'mat-accent'],
          });
        });
      } else {
        // create
        this._pianoService.create(piano).subscribe((response) => {
          this.closeForm(piano.id);
          this._snackBar.open(response, '', {
            duration: 2000,
            panelClass: ['mat-toolbar', 'mat-accent'],
          });
        });
      }
    }
  }
}
