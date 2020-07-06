import { Component, OnInit } from '@angular/core';
import {ControlPointService} from "../control-point.service";
import {ControlPoint} from "../control-point";
import {OriginalImageService} from "../original-image.service";
import {ImagedControlPoint} from "../imaged-control-point";
import {combineAll, map, mergeMap, switchMap, tap, toArray} from "rxjs/operators";
import {combineLatest, forkJoin, merge, of} from "rxjs";
import {ColorService} from "../color.service";
import {UnprojectionService} from "../unprojection.service";

@Component({
  selector: 'app-control-points',
  templateUrl: './control-points.component.html',
  styleUrls: ['./control-points.component.css']
})
export class ControlPointsComponent implements OnInit {

  imagedControlPoints: ImagedControlPoint[];

  constructor(private controlPointService: ControlPointService,
              private originalImageService: OriginalImageService,
              private unprojectionService: UnprojectionService) { }

  ngOnInit() {
    this.getControlPoints();
  }

  getControlPoints(): void {
    this.controlPointService.getControlPoints()
      .pipe(
        map((items) => {
          return items.map((item => {
            return this.originalImageService
              .getOriginalImage(item.id)
              .pipe(map(original => {
                return {...item, original}
              }))
          }))
        }),
        switchMap((all) => {
          if (all.length == 0)
          {
            return of([])
          }
          return combineLatest(all)
        }))
      .subscribe(imagedControlPoints => {
        this.imagedControlPoints = imagedControlPoints;
      });

  }

  deleteControlPoint(controlPoint: ControlPoint): void {
    console.log(controlPoint);
    this.controlPointService.removeControlPoint(controlPoint)
  }

}
