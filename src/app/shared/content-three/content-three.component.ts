import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-three',
  templateUrl: './content-three.component.html',
  styleUrls: ['./content-three.component.scss'],
})
export class ContentThreeComponent implements OnInit {
  options: string[] = [
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    'Six',
    'Seven',
    'Eight',
    'Nine',
    'Ten',
    'Eleven',
    'Twelve',
    'Thirteen',
    'Fourteen',
    'Fifteen',
  ];
  constructor() {}

  ngOnInit(): void {}
}
