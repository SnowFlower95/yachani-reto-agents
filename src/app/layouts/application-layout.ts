import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { menus, profile } from '../data/demo';
@Component({
  selector: 'app-application-layout',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './application-layout.html',
  styleUrl: './application-layout.css',
})
export class ApplicationLayout {
  @Input() tutor = false;
  readonly profile = profile;
  readonly menus = menus;
  menuOpen = false;
  get home() {
    return this.tutor ? '/app/inicio-tutor' : '/app/inicio-estudiante';
  }
}
