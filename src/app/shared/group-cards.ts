import { Component, Input } from '@angular/core';
import { groups } from '../data/demo';
@Component({
  selector: 'app-group-cards',
  standalone: true,
  templateUrl: './group-cards.html',
  styleUrl: './group-cards.css',
})
export class GroupCards {
  @Input() tutor = false;
  readonly groups = groups;
}
