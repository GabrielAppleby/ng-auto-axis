import { Component, OnInit } from '@angular/core';
import {HoveredPointService} from "../hovered-point.service";
import {UnprojectionService} from "../unprojection.service";
import {bufferTime, throttle} from "rxjs/operators";
import {interval} from "rxjs";

@Component({
  selector: 'app-unprojected',
  templateUrl: './unprojected.component.html',
  styleUrls: ['./unprojected.component.css']
})
export class UnprojectedComponent implements OnInit {

  img: string;

  constructor(private hoveredPointService: HoveredPointService,
              private unprojectionService: UnprojectionService) { }

  ngOnInit(): void {
    this.getHoveredPoint();
  }

  getHoveredPoint() {
    this.hoveredPointService.getHoveredPoint()
      .pipe(throttle(ev => interval(200)))
      .subscribe(hoveredPoints => this.unprojectionService.getUnprojectedImage(hoveredPoints)
        .subscribe(img => this.img = img));
  }

}
