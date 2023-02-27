import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IusestylesComponent } from './iusestyles/iusestyles.component';


@NgModule({
  imports: [CommonModule],
  declarations: [IusestylesComponent],
  exports: [IusestylesComponent],
})
export class SharedUiModule {}
