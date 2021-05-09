import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-one',
  templateUrl: './content-one.component.html',
  styleUrls: ['./content-one.component.scss']
})
export class ContentOneComponent implements OnInit {

  options: string[] =
    ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten',
      'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen'];
  
  constructor() { }

  ngOnInit(): void {
  }

}
