import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'angular15-sass-issue-hello',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss'],
})
export class HelloComponent {}
