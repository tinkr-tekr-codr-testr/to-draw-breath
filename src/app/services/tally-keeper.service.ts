import { Injectable } from '@angular/core';
import { SessionParamsService } from './session-params.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TallyKeeperService {
  tally = new BehaviorSubject<number>(0);
  tallyThreshold = new BehaviorSubject<number>(5);
  
  totalScore = new BehaviorSubject<number>(0);
  sessionGoal: number;

  constructor(private params: SessionParamsService) {
    const {sessionGoal, initialTallyThreshold} = params;

    this.sessionGoal = sessionGoal;
    this.tallyThreshold.next(initialTallyThreshold);
   }



  thresholdReached(){
    this.totalScore.next(this.totalScore.value + this.tally.value);
    this.reset();
    this.levelUp();

    this.sessionGoal 
  }

  levelUp(){
    this.tallyThreshold.next(this.tallyThreshold.value+1)
  }

  levelDown(){
    this.tallyThreshold.next(this.tallyThreshold.value-1)
  }

  increment(){
    this.tally.next(this.tally.value+1)
    if(this.tally.value == this.tallyThreshold.value)
      this.thresholdReached();
  }

  reset(){
    this.tally.next(0);
  }
}
