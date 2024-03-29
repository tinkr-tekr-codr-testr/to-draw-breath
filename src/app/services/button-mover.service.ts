import { ElementRef, Injectable } from '@angular/core';
import {Axis, DefaultAxis} from '../models/Axis';
import { AnimationController, Animation } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ButtonMoverService {

  private _animation!: Animation;
  private x : Axis;
  private y: Axis;

  private currentTransform = 'none';

  constructor(private aniCtrl: AnimationController) {
    this.x = DefaultAxis();
    this.y = DefaultAxis();
  }

  public set animation(card: ElementRef<HTMLIonCardElement>){
    this._animation = this.aniCtrl.create()
    .addElement(card.nativeElement)
    .duration(1500)
    .iterations(1)
    .fromTo('transform', `translate(${this.x.position}vw, ${this.y.position}vh)`, `translate(${this.x.position+15}vw, ${this.y.position+15}vh)`)
  

  }

  play(card: ElementRef<HTMLIonCardElement>) {
    const xDelta = this.calculate(this.x)*1;
    const yDelta = this.calculate(this.y)*1;
    

    //`translate(${xDelta}%, ${yDelta}%)`;
    //.fromTo('opacity', '1', '0.2');

    this._animation.play();

    console.log(this.currentTransform);
    this.currentTransform = window.getComputedStyle(card.nativeElement).transform;
    console.log(this.currentTransform);
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

  pause() {
    this._animation.pause();
  }

  
  



  stop() {
    this._animation.stop();
  }
}
