import {Component, ElementRef, OnInit} from '@angular/core';
import * as d3 from 'd3';
import {LabeledPoint} from "../labeled-point";
import {LabeledPointService} from "../labeled-point.service";
import {ControlPointService} from "../control-point.service";
import {ControlPoint} from "../control-point";
import {ColorService} from "../color.service";
import {HoveredPointService} from "../hovered-point.service";
import {SelectedInstanceService} from "../selected-instance.service";

@Component({
  selector: 'app-auto-axis-chart',
  templateUrl: './auto-axis-chart.component.html',
  styleUrls: ['./auto-axis-chart.component.css']
})
export class AutoAxisChartComponent implements OnInit {

  private readonly BUFFER_PROPORTION: number = 1 / 20;
  private readonly MARGINS_PROPORTION: number = 1 / 8;
  private readonly CIRCLE_R = 2;
  private readonly WIDTH = 500;
  private readonly HEIGHT = 500;
  private readonly hostElement;
  private colors;
  private controlPoints;
  private labeledPoints;
  private circlesG;
  private xScale;
  private yScale;
  private drag;

  constructor(private labeledPointService: LabeledPointService,
              private controlPointService: ControlPointService,
              private colorService: ColorService,
              private hoveredPointService: HoveredPointService,
              private selectedInstanceService: SelectedInstanceService,
              private elRef: ElementRef)
  {
    this.hostElement = elRef.nativeElement;
  }

  ngOnInit() {
    this.createChart();
    this.getControlPoints();
    this.getLabeledPoints();
    this.colors = this.colorService.getColors();
  }

  getLabeledPoints(): void {
    this.labeledPointService.getLabeledPoints()
      .subscribe(labeledPoints => {
        this.labeledPoints = labeledPoints;

        return this.updateChart(labeledPoints.filter((labeledPoint) => {
          return this.controlPoints.map(item => item.id).indexOf(labeledPoint.id) === -1;
        }))});
  }

  getControlPoints(): void {
    this.controlPointService.getControlPoints()
      .subscribe(controlPoints => {
        this.controlPoints = controlPoints;
        this.updatecharttw(controlPoints)
        if (this.labeledPoints)
        {
          this.updateChart(this.labeledPoints.filter((labeledPoint) => {
            return controlPoints.map(item => item.id).indexOf(labeledPoint.id) === -1;
          }));
        }
      });
  }

  updateControlPoints(controlPoint: ControlPoint): void {
    this.controlPointService.updateControlPoints(controlPoint);
  }

  updateChart(labeledPoints: LabeledPoint[])
  {
    if (labeledPoints && this.circlesG && this.xScale && this.yScale)
    {
      this.circlesG
        .selectAll('.labeledPoint')
        .data(labeledPoints)
        .join(
          enter => enter
            .append('circle')
            .attr('class', "labeledPoint")
            .attr('cx', (d) => {
              return this.xScale(d.x);
            })
            .attr('cy', (d) => {
              return this.yScale(d.y);
            })
            .attr('r', this.CIRCLE_R)
            .attr('id', (d) => {
              return "id" + d.id.toString();
            })
            .style("stroke", "black")
            .style("fill", (d) => {
              return this.colors(String(d.label));
            })
            .style("stroke-width", .25)
            .on('mousemove', (d) => {
              this.selectedInstanceService.setSelectedInstance(d)
            })
            .call(this.drag),
          update => update
            .attr('cx', (d) => {
              return this.xScale(d.x);
            })
            .attr('cy', (d) => {
              return this.yScale(d.y);
            })
            .attr('r', this.CIRCLE_R)
            .attr('id', (d) => {
              return "id" + d.id.toString();
            })
            .style("fill", (d) => {
              return this.colors(String(d.label));
            }),
          exit => exit.remove()
        );

    }
  }

  updatecharttw(controlPoints: ControlPoint[])
  {
    if (controlPoints && this.circlesG && this.xScale && this.yScale)
    {
      const circle_r = this.CIRCLE_R;

      this.circlesG
        .selectAll('.controlPoint')
        .data(controlPoints)
        .join(
          enter => enter
            .append('circle')
            .attr('class', "controlPoint")
            .attr('cx', (d) => {
              return this.xScale(d.controlledX);
            })
            .attr('cy', (d) => {
              return this.yScale(d.controlledY);
            })
            .attr('r', circle_r * 4)
            .attr('id', (d) => {
              return "id" + d.id.toString();
            })
            .style("stroke", "black")
            .style("fill", (d) => {
              return this.colors(String(d.label));
            })
            .style("stroke-width", .25)
            .on('mousemove', (d) => {
              this.selectedInstanceService.setSelectedInstance(d)
            })
            .call(this.drag),
          update => update
            .attr('cx', (d) => {
              return this.xScale(d.controlledX);
            })
            .attr('cy', (d) => {
              return this.yScale(d.controlledY);
            })
            .attr('r', this.CIRCLE_R * 4)
            .attr('id', (d) => {
              return "id" + d.id.toString();
            })
            .style("fill", (d) => {
              return this.colors(String(d.label));
            }),
          exit => exit.remove()
        );

    }
  }

  createChart()
  {
    const margins = this.WIDTH * this.MARGINS_PROPORTION;
    const minX = 0;
    const minY = 0;
    const maxX = 1;
    const maxY = 1;

    const xScaleBuffer = (maxX - minX) * this.BUFFER_PROPORTION;
    const yScaleBuffer = (maxY - minY) * this.BUFFER_PROPORTION;

    this.xScale = d3.scaleLinear()
      .domain([minX - xScaleBuffer, maxX + xScaleBuffer])
      .range([margins, (this.WIDTH - margins)]);
    this.yScale = d3.scaleLinear()
      .domain([minY - yScaleBuffer, maxY + yScaleBuffer])
      .range([(this.HEIGHT - margins), margins]);

    const xAxis = d3.axisBottom(this.xScale);
    const yAxis = d3.axisLeft(this.yScale);

    const rootG = d3.select(this.hostElement)
      .append("svg")
      .attr('height', 480)
      .attr('width', 480);

    this.circlesG = rootG.append('g')
      .attr("id", "circles");
    const xAxisG = rootG.append('g');
    const yAxisG = rootG.append('g');

      xAxisG
        .attr("class", "axis")
        .attr("transform", "translate(0," + (this.HEIGHT - margins) + ")")
        .call(xAxis);

      yAxisG
        .attr("class", "axis")
        .attr("transform", "translate(" + margins + ", 0)")
        .call(yAxis);
    const circle_r = this.CIRCLE_R;
    const xScale = this.xScale;
    const yScale = this.yScale;

    this.drag = d3.drag()
      .subject(function() {
        return {x: d3.event.x, y: d3.event.y};
      })
      .on('start', function() {
        d3.select(this).attr('r', circle_r * 4);
      })
      .on('drag', function() {
        d3.select(this)
          .attr("cx", d3.event.x)
          .attr("cy", d3.event.y);
      })
      .on('end', (d: LabeledPoint) => {
        d3.select("#id" + d.id.toString()).remove();
        const controlPoint: ControlPoint = {
          ...d,
          controlledX: xScale.invert(d3.event.x),
          controlledY: yScale.invert(d3.event.y)}

          this.updateControlPoints(controlPoint);
      });

    const hoveredPointService = this.hoveredPointService;

    rootG.on('mousemove', function () {
      const mousePos = d3.mouse(d3.event.currentTarget);
      hoveredPointService.setHoveredPoint({
        x: xScale.invert(mousePos[0]),
        y: yScale.invert(mousePos[1])
      });
    });
  }
}
