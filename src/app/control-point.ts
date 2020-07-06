import {LabeledPoint} from "./labeled-point";

export interface ControlPoint extends LabeledPoint {
  readonly controlledX: number;
  readonly controlledY: number;
}
