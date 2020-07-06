import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";
import {map} from "rxjs/operators";
import {Point} from "./point";

@Injectable({
  providedIn: 'root'
})
export class UnprojectionService {

  private readonly imageUrl = "digits/unprojected_image/"

  constructor(private http: HttpClient) {}

  getUnprojectedImage(point: Point): Observable<string> {
    return this.http.get(environment.apiUrl + this.imageUrl, {
      responseType: "blob",
      params: {
        x: point.x.toString(),
        y: point.y.toString()
      }
    }).pipe(map(blob => {
      return URL.createObjectURL(blob);
    }));
  }
}
