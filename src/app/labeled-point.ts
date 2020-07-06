import {Point} from "./point";

export interface LabeledPoint extends Point {
  readonly id: number;
  readonly label: number;
}
