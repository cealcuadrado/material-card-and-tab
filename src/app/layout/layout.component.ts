import { Component, OnInit } from '@angular/core';

declare var ParticleNetwork: any;
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  particleCanvasOptions: any = {
    particleColor: '#fff',
    background: '#000',
    interactive: true,
    speed: 'fast',
    density: 'medium'
  };

  particleCanvas: any;

  constructor() { }

  ngOnInit(): void {
    let particleCanvas = new ParticleNetwork(document.getElementById('particle-canvas'), this.particleCanvasOptions);
  }

}
