import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SessionParamsService } from './session-params.service';

@Injectable({
  providedIn: 'root'
})
export class BreakKeeperService {
  timeRemaining: BehaviorSubject<number>;
  breakEnded = new Observable<boolean>();
  interval: undefined | NodeJS.Timeout;

  constructor(private params: SessionParamsService) { 
    this.timeRemaining = new BehaviorSubject(params.breakTime);
  }

  startBreak(){
    this.interval = setInterval(this.tick,1000);
  }

  tick(){
    this.timeRemaining.next(this.timeRemaining.value-1);
    if(this.timeRemaining.value == 0) 
  }
}
