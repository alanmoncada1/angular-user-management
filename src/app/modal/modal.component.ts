import { Component, Input, OnInit } from '@angular/core';
import { ModalInterface } from 'src/interface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() title: string = "";
  @Input() description: string = "";

  modal: ModalInterface = {} as ModalInterface;
  
  ngOnInit(): void {
      this.modal.title = this.title;
      this.modal.description = this.description;
  }
}
