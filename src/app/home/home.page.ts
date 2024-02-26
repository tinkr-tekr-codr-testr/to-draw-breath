import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { TallyKeeperService } from '../services/tally-keeper.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, AsyncPipe]
})
export class HomePage {
  constructor(public tlyKpr: TallyKeeperService) {}
}
