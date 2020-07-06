import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Point} from "./point";

@Injectable({
  providedIn: 'root'
})
export class HoveredPointService {

  private hoveredPoint = new BehaviorSubject<Point>({x: .5, y: .5})
  constructor() { }

  getHoveredPoint(): Observable<Point>{
    return this.hoveredPoint;
  }

  setHoveredPoint(hoveredPoint: Point): void {
    this.hoveredPoint.next(hoveredPoint);
  }
}
