import { Component, OnInit } from '@angular/core';
import {LabeledPointService} from "../labeled-point.service";
import {ControlPointService} from "../control-point.service";

@Component({
  selector: 'app-retrain',
  templateUrl: './retrain.component.html',
  styleUrls: ['./retrain.component.css']
})
export class RetrainComponent implements OnInit {

  disabled = true;
  controlPoints;

  constructor(private labeledPointService: LabeledPointService,
              private controlPointService: ControlPointService) { }

  ngOnInit(): void {
    this.labeledPointService.getLabeledPoints().subscribe(labeledPoints => {
      if (labeledPoints.length > 0)
      {
        this.disabled = false
      }
    })
    this.controlPointService.getControlPoints().subscribe(controlPoints => this.controlPoints = controlPoints);
  }

  retrain(): void {
    this.labeledPointService.fetchLabeledPoints(this.controlPoints);
    this.disabled = true;
  }

}
