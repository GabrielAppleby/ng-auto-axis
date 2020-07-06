import { Injectable } from '@angular/core';
import * as d3 from "d3";

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  private readonly colors = d3.scaleOrdinal(d3.schemeCategory10);

  constructor() { }

  getColors(): d3.ScaleOrdinal<string, string> {
    return this.colors;
  }
}
