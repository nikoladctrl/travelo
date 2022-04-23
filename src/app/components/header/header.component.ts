import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  links: string[] = environment.links;

  constructor() { }

  ngOnInit(): void {
  }

}
