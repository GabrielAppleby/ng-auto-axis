import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";
import {map, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class OriginalImageService {

  private readonly imageUrl = "digits/image/"

  constructor(private http: HttpClient) {}

  getOriginalImage(instance_id: number): Observable<string> {
    return this.http.get(environment.apiUrl + this.imageUrl + instance_id, {
      responseType: "blob"
    }).pipe(map(blob => {
      return URL.createObjectURL(blob);
    }));
  }
}
