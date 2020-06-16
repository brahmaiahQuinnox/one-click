import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-image-model',
  templateUrl: './image-model.component.html',
  styleUrls: ['./image-model.component.css']
})
export class ImageModelComponent implements OnInit {

  @Input() fromParent;

  @Input() imageList;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    // console.log(this.fromParent);
  }
  closeModal(sendData) {
    this.activeModal.close(sendData);
  }
  deleteImage(){
   console.log(this.imageList);
   
  }

}
