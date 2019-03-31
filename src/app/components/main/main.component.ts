import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hmg-main',
  templateUrl: './main.component.html',
})
export class MainComponent implements OnInit {

  constructor(private readonly router: Router) {}

  ngOnInit() {}
}
