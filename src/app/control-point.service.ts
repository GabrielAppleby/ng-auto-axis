import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {ControlPoint} from "./control-point";

@Injectable({
  providedIn: 'root'
})
export class ControlPointService {

  private readonly controlPoints: BehaviorSubject<ControlPoint[]> = new BehaviorSubject<ControlPoint[]>([]);

  constructor() { }

  getControlPoints(): Observable<ControlPoint[]> {
    return this.controlPoints;
  }

  updateControlPoints(controlPoint: ControlPoint): void {
    const currentValue = this.controlPoints.value;
    let updatedValue = [...currentValue];
    const idx = updatedValue.map(item => item.id).indexOf(controlPoint.id);
    if (idx === -1)
    {
      updatedValue.push(controlPoint)
    }
    else {
      updatedValue.splice(idx, 1, controlPoint);
    }
    this.controlPoints.next(updatedValue);
  }

  removeControlPoint(controlPoint: ControlPoint): void {
    const currentValue = this.controlPoints.value;
    const idx = currentValue.map(v => v.id).indexOf(controlPoint.id);
    const updatedValue = [...currentValue]
    updatedValue.splice(idx, 1);
    this.controlPoints.next(updatedValue);
  }
}
