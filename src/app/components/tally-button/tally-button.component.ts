import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Animation, AnimationController } from '@ionic/angular';
import { IonCard, IonCardContent, IonButton, IonLabel, IonCardHeader, IonCardTitle } from '@ionic/angular/standalone';
import { Axis, DefaultAxis } from 'src/app/models/Axis';
import { ButtonMoverService } from 'src/app/services/button-mover.service';
import { TallyKeeperService } from 'src/app/services/tally-keeper.service';
@Component({
  selector: 'tally-button',
  templateUrl: './tally-button.component.html',
  styleUrls: ['./tally-button.component.scss'],
  standalone: true,
  imports: [IonCardTitle, IonCardHeader, IonLabel, IonButton, IonCard, IonCardContent, AsyncPipe]
})
export class TestComponent  implements AfterViewInit {
  @ViewChild(IonCard, { read: ElementRef }) 
  card!: ElementRef<HTMLIonCardElement>;

  private currentTransform = 'none';
  
  



  constructor(private btnMv: ButtonMoverService, public tlyKpr: TallyKeeperService) { 
     
  }

  acknowledge(){
    //this.btnMv.play(this.card);
    this.tlyKpr.increment();
  }

  ngAfterViewInit() {

  }
}
