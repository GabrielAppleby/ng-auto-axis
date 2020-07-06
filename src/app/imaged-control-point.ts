import {ControlPoint} from "./control-point";

export interface ImagedControlPoint extends ControlPoint{
  readonly original: string;
}
