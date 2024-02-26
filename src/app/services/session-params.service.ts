import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionParamsService {

  sessionGoal = 25;
  initialTallyThreshold = 5;

  constructor() { }
}
