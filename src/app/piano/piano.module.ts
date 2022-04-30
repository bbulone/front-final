import { PianoService } from './../service/piano.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PianoRoutingModule } from './piano-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PianoComponent } from './piano.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
// import { PianoDetailsComponent } from '../piano-details/piano-details.component';
// import { PianoFormComponent } from './components/piano-form/piano-form.component';
@NgModule({
  declarations: [PianoComponent],
  imports: [
    CommonModule,
    PianoRoutingModule,
    SharedModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
  ],
  providers: [PianoService, MatDatepickerModule, MatNativeDateModule],
})
export class PianoModule {}
