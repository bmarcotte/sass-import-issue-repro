import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IalsousestylesModule, SharedUiModule } from '@angular15-sass-issue/shared-ui';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, SharedUiModule, IalsousestylesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
