import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Animation, AnimationController } from '@ionic/angular';
import { IonCard, IonCardContent } from '@ionic/angular/standalone';
import { Axis, DefaultAxis } from 'src/app/models/Axis';
import { ButtonMoverService } from 'src/app/services/button-mover.service';
@Component({
  selector: 'test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  standalone: true,
  imports: [IonCard, IonCardContent]
})
export class TestComponent  implements AfterViewInit {
  @ViewChild(IonCard, { read: ElementRef }) 
  card!: ElementRef<HTMLIonCardElement>;

  private currentTransform = 'none';

  



  constructor(private btnMv: ButtonMoverService) { 

  }

  play(){
    this.btnMv.play(this.card);
  }

  ngAfterViewInit() {

  }
}
