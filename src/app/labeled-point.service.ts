import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../environments/environment";
import {LabeledPoint} from "./labeled-point";
import {BehaviorSubject, Observable} from "rxjs";
import {ControlPoint} from "./control-point";
import {ControlPointService} from "./control-point.service";

@Injectable({
  providedIn: 'root'
})
export class LabeledPointService {
  private readonly pointsUrl: string = "/digits/labeled_coords";

  private readonly labeledPoints: BehaviorSubject<LabeledPoint[]> = new BehaviorSubject<LabeledPoint[]>([]);

  constructor(private http: HttpClient) { }

  getLabeledPoints(): Observable<LabeledPoint[]> {
    this.fetchLabeledPoints([]);
    return this.labeledPoints;
  }

  fetchLabeledPoints(controlPoints: ControlPoint[]): void {
    const params = new HttpParams().set('control_points', JSON.stringify(controlPoints));
    this.http.get<LabeledPoint[]>(environment.apiUrl + this.pointsUrl, {
      params: params
    })
      .subscribe(labeledPoints => this.labeledPoints.next(labeledPoints))
  }
}
