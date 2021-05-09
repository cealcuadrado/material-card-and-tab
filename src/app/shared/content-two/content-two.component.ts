import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-two',
  templateUrl: './content-two.component.html',
  styleUrls: ['./content-two.component.scss'],
})
export class ContentTwoComponent implements OnInit {
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

  selectedFive: string;
  constructor() {}

  ngOnInit(): void {}
}
