import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
// import { PianoDetailsComponent } from './piano-details/piano-details.component';
// import { PianoFormComponent } from './piano/components/piano-form/piano-form.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    MatGridListModule,
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent],
  exports: [MatToolbarModule],
})
export class AppModule {}
