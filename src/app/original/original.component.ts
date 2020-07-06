import { Component, OnInit } from '@angular/core';
import {SelectedInstanceService} from "../selected-instance.service";
import {OriginalImageService} from "../original-image.service";

@Component({
  selector: 'app-original',
  templateUrl: './original.component.html',
  styleUrls: ['./original.component.css']
})
export class OriginalComponent implements OnInit {

  img: string;

  constructor(private selectedInstanceService: SelectedInstanceService,
              private originalImageService: OriginalImageService) { }

  ngOnInit(): void {
    this.getSelectedInstance();
  }

  getSelectedInstance() {
    this.selectedInstanceService.getSelectedInstance()
      .subscribe(selectedInstance => this.originalImageService.getOriginalImage(selectedInstance.id)
        .subscribe(img => this.img = img));
  }

}
