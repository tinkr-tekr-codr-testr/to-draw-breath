import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Animation, AnimationController } from '@ionic/angular';
import { IonCard, IonCardContent } from '@ionic/angular/standalone';
import { Axis, DefaultAxis } from 'src/app/models/Axis';
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
  private animation!: Animation;
  private x : Axis;
  private y: Axis;

  private currentTransform = 'none';

  



  constructor(private aniCtrl: AnimationController) { 
    this.x = DefaultAxis();
    this.y = DefaultAxis();
  }

  ngAfterViewInit() {
    this.animation = this.aniCtrl.create()
    .addElement(this.card.nativeElement)
    .duration(1500);
    this.animation
    .iterations(1)
    .fromTo('transform', `translate(${this.x.position}vw, ${this.y.position}vh)`, `translate(${this.x.position+15}vw, ${this.y.position}vh)`)
  }



  play() {
    const xDelta = this.calculate(this.x)*1;
    const yDelta = this.calculate(this.y)*1;
    

    //`translate(${xDelta}%, ${yDelta}%)`;
    //.fromTo('opacity', '1', '0.2');

    this.animation.play();

    console.log(this.currentTransform);
    this.currentTransform = window.getComputedStyle(this.card.nativeElement).transform;
    console.log(this.currentTransform);

  }

  pause() {
    this.animation.pause();
  }

  calculate(axis: Axis): number{
    const {position, startThreshold, endThreshold, absStart, absEnd} = axis;
    let delta;
    
    const bounce = (position:number, boundary?: number, direction?: number)=>{
      if(boundary && direction) return this.getRandomIntInclusive(position, boundary)*direction;
      else{
        const direction = this.randomDirection();
        const boundary = direction ? absStart : absEnd;
        return this.getRandomIntInclusive(position, boundary)*direction;
      }
    }

    if(position < startThreshold)     delta = bounce(position, absEnd, -1);
    else if (position > endThreshold) delta = bounce(position, absStart, 1)
    else                              delta = bounce(position)

    return delta;
  }
  

  randomDirection(){
    return this.getRandomIntInclusive(-1, 1)
  }

  getRandomIntInclusive(min: number, max: number) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); 
  }

  stop() {
    this.animation.stop();
  }

}
