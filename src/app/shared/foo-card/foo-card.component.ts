import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-foo-card',
  templateUrl: './foo-card.component.html',
  styleUrls: ['./foo-card.component.scss']
})
export class FooCardComponent implements OnInit {

  @Input() title: string = 'Title';
  @Input() headerType: string = 'dark';
  @Input() headerTitleType: string = 'white';

  constructor() { }

  ngOnInit(): void {
  }

}
