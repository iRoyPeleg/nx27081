import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MylibComponent } from '@nx27081/mylib';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, MylibComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'myapp';
}
