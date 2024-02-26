import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TallyKeeperService } from 'src/app/services/tally-keeper.service';
import { AsyncPipe } from '@angular/common';
import {TallyButtonComponent} from '../../components/tally-button/tally-button.component';
import { SessionParamsService } from 'src/app/services/session-params.service';


@Component({
  selector: 'session',
  templateUrl: './session.page.html',
  styleUrls: ['./session.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, AsyncPipe, TallyButtonComponent]
})
export class SessionPage implements OnInit {

  constructor(public tlyKpr: TallyKeeperService, public params: SessionParamsService) {}

  ngOnInit() {
  }

}
