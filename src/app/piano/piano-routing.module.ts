import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PianoDetailsComponent } from './../piano-details/piano-details.component';
import { PianoComponent } from './piano.component';

const routes: Routes = [
  {
    path: '',
    component: PianoComponent,
    children: [
      {
        path: '',
        component: PianoComponent,
      },
      {
        path: ':id',
        component: PianoDetailsComponent,
      },
      {
        path: ':id/education',
        component: PianoDetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PianoRoutingModule {}
