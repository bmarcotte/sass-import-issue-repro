import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { SharedUiModule } from '@angular15-sass-issue/shared-ui';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MatButtonModule, HelloComponent, SharedUiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
