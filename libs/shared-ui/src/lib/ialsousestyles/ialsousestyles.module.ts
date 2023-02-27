import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IalsousestylesComponent } from './ialsousestyles.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [CommonModule, MatButtonModule],
  declarations: [IalsousestylesComponent],
  exports: [IalsousestylesComponent],
})
export class IalsousestylesModule {}
