import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  img1 = "https://image.ibb.co/iBtVo6/mustang_yellow.jpg";
  img2 = "https://image.ibb.co/gbYKgR/black_lamborghini.png";
  img3 = "https://image.ibb.co/iahC1R/two_mustangs.jpg";
  img4 = "https://image.ibb.co/moDKgR/camaro_red.jpg";

  constructor() { }

  ngOnInit() {
  }



}
