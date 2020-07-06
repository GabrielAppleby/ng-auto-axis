import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Point} from "./point";
import {LabeledPoint} from "./labeled-point";

@Injectable({
  providedIn: 'root'
})
export class SelectedInstanceService {

  private selectedInstance = new BehaviorSubject<LabeledPoint>({id: 0, label: 0, x: .5, y: .5})

  constructor() { }

  getSelectedInstance(): Observable<LabeledPoint>{
    return this.selectedInstance;
  }

  setSelectedInstance(selectedInstance: LabeledPoint): void {
    this.selectedInstance.next(selectedInstance);
  }
}
