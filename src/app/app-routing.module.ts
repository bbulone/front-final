import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PianoDetailsComponent } from './piano-details/piano-details.component';

const routes: Routes = [
  {
    path: ':id',
    component: PianoDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
