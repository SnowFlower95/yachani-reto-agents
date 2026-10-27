import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplicationLayout } from '../../layouts/application-layout';
import { GroupCards } from '../../shared/group-cards';
import {
  recommendations,
  notices,
  progress,
  nextSession,
  stats,
  sessions,
  requests,
} from '../../data/demo';
@Component({
  standalone: true,
  imports: [ApplicationLayout, GroupCards],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  readonly tutor = !!inject(ActivatedRoute).snapshot.data['tutor'];
  readonly recommendations = recommendations;
  readonly notices = notices;
  readonly progress = progress;
  readonly next = nextSession;
  readonly stats = stats;
  readonly sessions = sessions;
  readonly requests = requests;
}
